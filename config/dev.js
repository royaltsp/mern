
const dbs = {
	tspmongo: 'tspmongo',
	ecomm: 'ecomm'
};

const connString = {
	local: "mongodb://localhost:27017/tspmongo",
	remote: `mongodb+srv://tsp:tsp321@cluster0-pfx69.mongodb.net/${dbs.tspmongo}?retryWrites=true&w=majority`
}

module.exports = {
	mongourl: connString.local
}

/*
mongo "mongodb+srv://cluster0-pfx69.mongodb.net/tspmongo"  --username tsp
mongo "mongodb+srv://cluster0-pfx69.mongodb.net/ecomm"  --username tsp

for local db
mongodb://localhost:27020/mydb

template
mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]
*/