using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using TechInsightAPI.Models;
using TechInsightAPI.Models.TechInsight.Models;

namespace TechInsightAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

            //this.ChangeTracker.LazyLoadingEnabled = false; disables lazy ladoing
            
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies(); // Enable lazy loading
                                                    // Other configuration options
        }

        public DbSet<Example> Examples { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Like> Likes { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<PostTag> PostTags { get; set; }
        public DbSet<UserClick> UserClicks { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Post>()
            .HasOne(p => p.User)
            .WithMany(u => u.Posts)
            .HasForeignKey(p => p.UserId);

            modelBuilder.Entity<PostTag>()
                .HasKey(pt => new { pt.PostId, pt.TagId });

            modelBuilder.Entity<PostTag>()
                .HasOne(pt => pt.PostReference)
                .WithMany(p => p.PostTags)
                .HasForeignKey(pt => pt.PostId);

            modelBuilder.Entity<PostTag>()
                .HasOne(pt => pt.TagReference)
                .WithMany(t => t.PostTags)
                .HasForeignKey(pt => pt.TagId);

          


            modelBuilder.Entity<UserClick>()
                .HasOne(uc => uc.ClickedPost)
                .WithMany(p => p.UserClicks)
                .HasForeignKey(uc => uc.PostId);

            modelBuilder.Entity<UserClick>()
                .HasOne(uc => uc.ClickingUser)
                .WithMany(u => u.UserClicks)
                .HasForeignKey(uc => uc.UserId);

            modelBuilder.Entity<Post>()
                .HasMany(p => p.Comments)
                .WithOne(c => c.Post)
                .HasForeignKey(c => c.PostId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Post>()
                .HasMany(p => p.Likes)
                .WithOne(c => c.Post)
                .HasForeignKey(c => c.PostId)
                .OnDelete(DeleteBehavior.Cascade);


            modelBuilder.Entity<Comment>()
    .HasOne(c => c.User)
    .WithMany(u => u.Comments)
    .HasForeignKey(c => c.UserId);
    

          

            modelBuilder.Entity<Post>()
       .HasOne(p => p.Category)
       .WithMany(c => c.Posts)
       .HasForeignKey(p => p.CategoryId)
       .OnDelete(DeleteBehavior.Cascade);


            modelBuilder.Entity<Contact>()
           .HasOne(c => c.User)
           .WithMany(u => u.Contacts)
           .HasForeignKey(c => c.UserId);
     



            base.OnModelCreating(modelBuilder);
        }

    }
}
