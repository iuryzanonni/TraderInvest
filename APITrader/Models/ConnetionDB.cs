﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace APITrader.Models
{
    public static class ConnetionDB
    {
        public static MySqlConnection connection()
        {
            string connetionString= "server=localhost;port=3306;database=;username=root;password=root";
            MySqlConnection connection = new MySqlConnection(connetionString);

            return connection;
        }

    }
}
