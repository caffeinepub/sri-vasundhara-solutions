import List "mo:core/List";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Order "mo:core/Order";

actor {
  type ContactFormSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    service : Text;
    message : Text;
    timestamp : Int;
  };

  type BlogPost = {
    title : Text;
    excerpt : Text;
    category : Text;
    date : Text;
    readTime : Nat;
    slug : Text;
  };

  type PortfolioItem = {
    title : Text;
    category : Text;
    clientType : Text;
    result : Text;
    metric : Text;
    description : Text;
  };

  module BlogPost {
    public func compare(post1 : BlogPost, post2 : BlogPost) : Order.Order {
      Text.compare(post1.date, post2.date);
    };
  };

  module PortfolioItem {
    public func compare(item1 : PortfolioItem, item2 : PortfolioItem) : Order.Order {
      switch (Text.compare(item1.category, item2.category)) {
        case (#equal) { Text.compare(item1.title, item2.title) };
        case (order) { order };
      };
    };
  };

  let contactSubmissions = List.empty<ContactFormSubmission>();
  let blogPosts = List.fromArray<BlogPost>([
    {
      title = "Top 5 Digital Marketing Tips for 2024";
      excerpt = "Discover the latest strategies to boost your online presence and drive results.";
      category = "Digital Marketing";
      date = "2024-06-10";
      readTime = 5;
      slug = "digital-marketing-tips-2024";
    },
    {
      title = "SEO Guide: Rank Higher in Search Results";
      excerpt = "Learn proven techniques to improve your website's SEO and attract more visitors.";
      category = "SEO";
      date = "2024-05-15";
      readTime = 7;
      slug = "seo-guide-search-rankings";
    },
    {
      title = "Social Media Strategies for Small Businesses";
      excerpt = "Maximize your social media presence with these simple yet effective tips.";
      category = "Social Media";
      date = "2024-04-20";
      readTime = 6;
      slug = "social-media-strategies";
    },
  ]);
  let portfolioItems = List.fromArray<PortfolioItem>([
    {
      title = "Website Design for ABC Corp";
      category = "Web Design";
      clientType = "Corporate";
      result = "Increased conversions";
      metric = "35%";
      description = "Complete website redesign for ABC Corp focused on modern UI and improved user experience.";
    },
    {
      title = "SEO Campaign for Local Restaurant";
      category = "SEO";
      clientType = "Small Business";
      result = "Google rankings boost";
      metric = "Top 3 results";
      description = "SEO optimization for a local restaurant's website leading to higher search rankings.";
    },
    {
      title = "Social Media Management for Boutique Shop";
      category = "Social Media";
      clientType = "Retail";
      result = "Audience growth";
      metric = "50% increase";
      description = "Comprehensive social media management services for a boutique clothing store.";
    },
    {
      title = "E-commerce Website for Startup";
      category = "Web Design";
      clientType = "Startup";
      result = "Online sales growth";
      metric = "2x increase";
      description = "Developed a custom e-commerce website for a startup business, resulting in doubled online sales.";
    },
    {
      title = "PPC Ad Campaign for Dentist";
      category = "Digital Marketing";
      clientType = "Healthcare";
      result = "Lead generation";
      metric = "100+ new leads";
      description = "Managed PPC ad campaigns for a dental practice, generating over 100 new patient leads.";
    },
  ]);

  let portfolioByCategory = Map.empty<Text, List.List<PortfolioItem>>();
  let blogPostsByCategory = Map.empty<Text, List.List<BlogPost>>();

  // Prepare blog posts by category
  for (post in blogPosts.values()) {
    let category = post.category;
    switch (blogPostsByCategory.get(category)) {
      case (null) {
        let newList = List.empty<BlogPost>();
        newList.add(post);
        blogPostsByCategory.add(category, newList);
      };
      case (?existingList) {
        existingList.add(post);
      };
    };
  };

  // Prepare portfolio items by category
  for (item in portfolioItems.values()) {
    let category = item.category;
    switch (portfolioByCategory.get(category)) {
      case (null) {
        let newList = List.empty<PortfolioItem>();
        newList.add(item);
        portfolioByCategory.add(category, newList);
      };
      case (?existingList) {
        existingList.add(item);
      };
    };
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, service : Text, message : Text) : async () {
    let submission : ContactFormSubmission = {
      name;
      email;
      phone;
      service;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(submission);
  };

  public query ({ caller }) func getContactSubmissions() : async [ContactFormSubmission] {
    contactSubmissions.toArray();
  };

  public query ({ caller }) func getBlogPosts() : async [BlogPost] {
    blogPosts.toArray().sort();
  };

  public query ({ caller }) func getPortfolioItems() : async [PortfolioItem] {
    portfolioItems.toArray().sort();
  };

  public query ({ caller }) func getPortfolioItemsByCategory(category : Text) : async [PortfolioItem] {
    switch (portfolioByCategory.get(category)) {
      case (null) { Runtime.trap("Category not found") };
      case (?items) { items.toArray() };
    };
  };

  public query ({ caller }) func getBlogPostsByCategory(category : Text) : async [BlogPost] {
    switch (blogPostsByCategory.get(category)) {
      case (null) { Runtime.trap("Category not found") };
      case (?posts) { posts.toArray() };
    };
  };
};
