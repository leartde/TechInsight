﻿namespace TechInsightAPI.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    namespace TechInsight.Models
    {
        public class UserClick
        {
            [Key]
            [Column(Order = 1)]
            public int PostId { get; set; }

            [Key]
            [Column(Order = 2)]
            public int UserId { get; set; }

            public virtual Post ClickedPost { get; set; }
            public virtual User ClickingUser { get; set; }
        }
    }
}
