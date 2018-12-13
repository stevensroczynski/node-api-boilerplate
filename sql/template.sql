-- Create a database called template with username/password postgres/postgres then apply this script

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 7 (class 2615 OID 24577)
-- Name: user_data; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA user_data;


ALTER SCHEMA user_data OWNER TO postgres;

--
-- TOC entry 1 (class 3079 OID 12655)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2406 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- TOC entry 2 (class 3079 OID 24581)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 2407 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 187 (class 1259 OID 24606)
-- Name: user_profile; Type: TABLE; Schema: user_data; Owner: postgres
--

CREATE TABLE user_data.user_profile (
    username character varying(63) NOT NULL,
    first_name character varying(63),
    last_name character varying(63),
    password character varying,
    date_created date,
    date_updated date,
    is_active boolean DEFAULT true,
    email character varying,
    user_id integer NOT NULL
);


ALTER TABLE user_data.user_profile OWNER TO postgres;

--
-- TOC entry 188 (class 1259 OID 24623)
-- Name: user_profile_user_id_seq; Type: SEQUENCE; Schema: user_data; Owner: postgres
--

CREATE SEQUENCE user_data.user_profile_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE user_data.user_profile_user_id_seq OWNER TO postgres;

--
-- TOC entry 2408 (class 0 OID 0)
-- Dependencies: 188
-- Name: user_profile_user_id_seq; Type: SEQUENCE OWNED BY; Schema: user_data; Owner: postgres
--

ALTER SEQUENCE user_data.user_profile_user_id_seq OWNED BY user_data.user_profile.user_id;


--
-- TOC entry 2281 (class 2604 OID 24625)
-- Name: user_profile user_id; Type: DEFAULT; Schema: user_data; Owner: postgres
--

ALTER TABLE ONLY user_data.user_profile ALTER COLUMN user_id SET DEFAULT nextval('user_data.user_profile_user_id_seq'::regclass);


-- Completed on 2018-06-05 22:20:56 EDT

--
-- PostgreSQL database dump complete
--
