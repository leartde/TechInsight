﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TechInsightAPI.Models
{
    public class PostTag
    {
        [Key]
        [Column(Order = 1)]
        public int PostId { get; set; }

        [Key]
        [Column(Order = 2)]
        public int TagId { get; set; }

        public Post PostReference { get; set; }
        public Tag TagReference { get; set; }
    }

}
