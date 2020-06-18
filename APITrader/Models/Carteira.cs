using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITrader.Models;
using MySql.Data.MySqlClient;

namespace APITrader.Models
{
    public class Carteira
    {
        public string user { get; set; }
        public string code { get; set; }
        public string cotas { get; set; }
        public string value_buy { get; set; }
        public string date_buy { get; set; }

        public Carteira(string user, string code, string cotas, string value_buy, string date_buy)
        {
            this.user = user;
            this.code = code;
            this.cotas = cotas;
            this.value_buy = value_buy;
            this.date_buy = date_buy;
        }
        public Carteira() { }

        public List<Carteira> carteiraUser(string user){
            MySqlConnection connection = ConnetionDB.connection();
            MySqlCommand query = connection.CreateCommand();

            query.CommandText = "SELECT * FROM trader_acoes.acoes_compra as ac WHERE ac.`USER` = '" + user + "'";

            var results = new List<Carteira>();
            connection.Open();

            MySqlDataReader fetch_query = query.ExecuteReader();

            while (fetch_query.Read())
            {
                results.Add(new Carteira(fetch_query["user"].ToString(),
                                         fetch_query["code"].ToString(),
                                         fetch_query["cotas"].ToString(),
                                         fetch_query["value_buy"].ToString(),
                                         fetch_query["date_buy"].ToString()));
            }

            connection.Close();

            return results;
        }

    }
}
