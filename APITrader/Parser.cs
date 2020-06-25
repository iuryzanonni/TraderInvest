using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using System.IO;
using MySql.Data.MySqlClient;
using APITrader.Models;

namespace APITrader
{
    public class Parser
    {
        public String m_codePattern;
        public Regex m_regexCode;
        public String m_idtPattern;
        public Regex m_regexIdt;

        public Parser()
        {
            this.m_codePattern = "\"code\":\"(\\w+)";
            this.m_idtPattern = "\"idt\":([0-9])([0-9])+";
            this.m_regexIdt = new Regex(m_idtPattern);
            this.m_regexCode = new Regex(m_codePattern);
            
        }

        public void fillDatabase()
        {
            StreamReader v_sr = new StreamReader("data.txt");
            string v_input;
            MySqlConnection v_connection = ConnetionDB.connection();
            MySqlCommand v_query = v_connection.CreateCommand();
            v_connection.Open();
            string[] v_partesCode;
            string[] v_partesIdt;



            while (v_sr.Peek() >= 0)
            {
                v_input = v_sr.ReadLine();
                MatchCollection v_matchesCode = m_regexCode.Matches(v_input);
                MatchCollection v_matchesIdt = m_regexIdt.Matches(v_input);

                if (v_matchesIdt.Count > 0)
                {
                    Console.WriteLine("{0} ({1} matches):", v_input, v_matchesIdt.Count);
                    for (int i = 0 ; i < v_matchesIdt.Count ; i++)
                    {
                        v_partesCode = v_matchesCode[i].ToString().Split("\":\"", StringSplitOptions.None);
                        v_partesIdt = v_matchesIdt[i].ToString().Split(":", StringSplitOptions.None);
                        v_query.CommandText = "INSERT INTO trader_invest.stocks VALUES (" + v_partesIdt[1] + ", '" + v_partesCode[1] + "')";
                        v_query.ExecuteNonQuery();
                        
                    }  
                }
            };
            v_connection.Close();
        }
    }
}
