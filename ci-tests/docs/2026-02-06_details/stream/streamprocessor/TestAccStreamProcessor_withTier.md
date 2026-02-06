# stream/streamprocessor/TestAccStreamProcessor_withTier Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/connections/sample_stream_solar | dev | 0.06s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/connections/sample_stream_solar | dev | 0.05s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar | dev | 0.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 8 seconds
- 2026-01-10 PASS 11 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 13 seconds
- 2026-01-13 PASS 10 seconds
- 2026-01-14 PASS 10 seconds
- 2026-01-15 PASS 10 seconds
- 2026-01-16 PASS 8 seconds
- 2026-01-17 PASS 10 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 13 seconds
- 2026-01-20 PASS 11 seconds
- 2026-01-21 PASS 11 seconds
- 2026-01-22 PASS 11 seconds
- 2026-01-23 PASS 10 seconds
- 2026-01-24 PASS 11 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 8 seconds
- 2026-01-27 PASS 10 seconds
- 2026-01-28 PASS 10 seconds
- 2026-01-29 PASS 10 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 11 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 12 seconds
- 2026-02-03
  - PASS 12 seconds
  - PASS 13 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5496656Z === RUN   TestAccStreamProcessor_withTier
2026-02-04T00:54:41.5868523Z === CONT  TestAccStreamProcessor_withTier
2026-02-04T00:54:41.5916400Z === NAME  TestAccStreamProcessor_withTier
2026-02-04T00:54:41.5916989Z     resource_test.go:63: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-02-04T00:54:41.5917373Z         
2026-02-04T00:54:41.5917810Z         Error: error fetching resource
2026-02-04T00:54:41.5918078Z         
2026-02-04T00:54:41.5918597Z           with data.mongodbatlas_stream_connection.sample_stream_solar,
2026-02-04T00:54:41.5919427Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "sample_stream_solar":
2026-02-04T00:54:41.5920199Z           12: 	data "mongodbatlas_stream_connection" "sample_stream_solar" {
2026-02-04T00:54:41.5920547Z         
2026-02-04T00:54:41.5921418Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/connections/sample_stream_solar
2026-02-04T00:54:41.5922357Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-04T00:54:41.5923007Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-04T00:54:41.5923720Z         6982945e09271d271f2f7985 and name test-acc-tf-s-8457605324373156284 not
2026-02-04T00:54:41.5924382Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-04T00:54:41.5924960Z         6982945e09271d271f2f7985 test-acc-tf-s-8457605324373156284],
2026-02-04T00:54:41.5925334Z         BadRequestDetail: 
2026-02-04T00:54:41.5934240Z    test_terraform_path=/home/runner/work/_temp/acf6f1af-5510-4765-8882-896c7ecb941f/terraform test_working_directory=/tmp/plugintest4152008099 test_name=TestAccStreamProcessor_basic
2026-02-04T00:54:41.5944170Z --- FAIL: TestAccStreamProcessor_withTier (0.62s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0679627Z === RUN   TestAccStreamProcessor_withTier
2026-02-05T01:04:40.1101777Z === CONT  TestAccStreamProcessor_withTier
2026-02-05T01:04:40.1102625Z   diagnostic_detail=
2026-02-05T01:04:40.1105803Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_rpc=ValidateResourceConfig diagnostic_attribute="AttributeName(\"pipeline\")" diagnostic_severity=ERROR tf_req_id=e4dbb44b-3fc4-33cc-ce2d-9b55d46e805f tf_proto_version=6.10 tf_resource_type=mongodbatlas_stream_processor diagnostic_summary="Invalid JSON String Value"
2026-02-05T01:04:40.1122554Z   
2026-02-05T01:04:40.1177814Z === NAME  TestAccStreamProcessor_withTier
2026-02-05T01:04:40.1178324Z     resource_test.go:63: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-02-05T01:04:40.1178738Z         
2026-02-05T01:04:40.1179013Z         Error: error fetching resource
2026-02-05T01:04:40.1179293Z         
2026-02-05T01:04:40.1179723Z           with data.mongodbatlas_stream_connection.sample_stream_solar,
2026-02-05T01:04:40.1180513Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "sample_stream_solar":
2026-02-05T01:04:40.1181236Z           12: 	data "mongodbatlas_stream_connection" "sample_stream_solar" {
2026-02-05T01:04:40.1181748Z         
2026-02-05T01:04:40.1182610Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/connections/sample_stream_solar
2026-02-05T01:04:40.1183650Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-05T01:04:40.1184296Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-05T01:04:40.1184921Z         6983e6a2304923ebd1858df5 and name test-acc-tf-s-6349336018238537323 not
2026-02-05T01:04:40.1185501Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-05T01:04:40.1186027Z         6983e6a2304923ebd1858df5 test-acc-tf-s-6349336018238537323],
2026-02-05T01:04:40.1186432Z         BadRequestDetail: 
2026-02-05T01:04:40.1186741Z --- FAIL: TestAccStreamProcessor_withTier (0.54s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
```
2026-02-06T00:56:32.5645120Z === RUN   TestAccStreamProcessor_withTier
2026-02-06T00:56:32.6090721Z === CONT  TestAccStreamProcessor_withTier
2026-02-06T00:56:32.6160947Z === NAME  TestAccStreamProcessor_withTier
2026-02-06T00:56:32.6161475Z     resource_test.go:63: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-02-06T00:56:32.6161890Z         
2026-02-06T00:56:32.6162168Z         Error: error fetching resource
2026-02-06T00:56:32.6162443Z         
2026-02-06T00:56:32.6162891Z           with data.mongodbatlas_stream_connection.sample_stream_solar,
2026-02-06T00:56:32.6163687Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "sample_stream_solar":
2026-02-06T00:56:32.6164409Z           12: 	data "mongodbatlas_stream_connection" "sample_stream_solar" {
2026-02-06T00:56:32.6164774Z         
2026-02-06T00:56:32.6165620Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar
2026-02-06T00:56:32.6166539Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-06T00:56:32.6167205Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-06T00:56:32.6167841Z         6985378713125e9acd98a203 and name test-acc-tf-s-69697366263959401 not found.
2026-02-06T00:56:32.6168479Z         Reason: Not Found. Params: [sample_stream_solar 6985378713125e9acd98a203
2026-02-06T00:56:32.6169023Z         test-acc-tf-s-69697366263959401], BadRequestDetail: 
2026-02-06T00:56:32.6169762Z --- FAIL: TestAccStreamProcessor_withTier (0.62s)
```


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 9 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 10 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 9 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 8 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 12 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 10 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
