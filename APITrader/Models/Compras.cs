using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITrader.Models;
using MySql.Data.MySqlClient;

namespace APITrader.Models
{
    public class Compras
    {
        public string m_company { get; set; }
        public string m_code { get; set; }
        public string m_date { get; set; }
        public string m_valueBuy { get; set; }
        public string m_cotas { get; set; }

        public Compras(string p_company, string p_code, string p_date, string p_valueBuy, string p_cotas)
        {
            this.m_company = p_company;
            this.m_code = p_code;
            this.m_date = p_date;
            this.m_valueBuy = p_valueBuy;
            this.m_cotas = p_cotas;
        }

        public Compras()
        {

        }

        public List<Compras> acoesCompradas()
        {
            MySqlConnection connection = ConnetionDB.connection();
            MySqlCommand query = connection.CreateCommand();

            query.CommandText = "SELECT * FROM trader_acoes.acoes_compra";

            var results = new List<Compras>();
            connection.Open();

            MySqlDataReader fetch_query = query.ExecuteReader();

            while (fetch_query.Read())
            {
                results.Add(new Compras(fetch_query["company"].ToString(), 
                                        fetch_query["code"].ToString(),
                                        fetch_query["date_buy"].ToString(),
                                        fetch_query["value_buy"].ToString(),
                                        fetch_query["cotas"].ToString()));
            }

            connection.Close();

            return results;
        }

       
    }
}
