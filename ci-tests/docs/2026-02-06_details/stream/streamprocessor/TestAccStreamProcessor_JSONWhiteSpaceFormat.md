# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/connections/sample_stream_solar | dev | 0.06s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/connections/sample_stream_solar | dev | 0.05s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar | dev | 0.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 4 seconds
- 2026-01-09 PASS 3 seconds
- 2026-01-10 PASS 4 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 4 seconds
- 2026-01-13 PASS 3 seconds
- 2026-01-14 PASS 4 seconds
- 2026-01-15 PASS 3 seconds
- 2026-01-16 PASS 3 seconds
- 2026-01-17 PASS 3 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 4 seconds
- 2026-01-20 PASS 4 seconds
- 2026-01-21 PASS 4 seconds
- 2026-01-22 PASS 5 seconds
- 2026-01-23 PASS 4 seconds
- 2026-01-24 PASS 4 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 seconds
- 2026-01-27 PASS 4 seconds
- 2026-01-28 PASS 3 seconds
- 2026-01-29 PASS 3 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 5 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 5 seconds
- 2026-02-03
  - PASS 4 seconds
  - PASS 5 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5497443Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-04T00:54:41.5868173Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-04T00:54:41.5887914Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-04T00:54:41.5888465Z     resource_test.go:156: Step 1/1 error: Error running pre-apply plan: exit status 1
2026-02-04T00:54:41.5888859Z         
2026-02-04T00:54:41.5889146Z         Error: error fetching resource
2026-02-04T00:54:41.5889418Z         
2026-02-04T00:54:41.5889794Z           with data.mongodbatlas_stream_connection.sample,
2026-02-04T00:54:41.5890433Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-02-04T00:54:41.5891061Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-02-04T00:54:41.5891392Z         
2026-02-04T00:54:41.5892193Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/connections/sample_stream_solar
2026-02-04T00:54:41.5893040Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-04T00:54:41.5893627Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-04T00:54:41.5894198Z         6982945e09271d271f2f7985 and name test-acc-tf-s-8457605324373156284 not
2026-02-04T00:54:41.5894734Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-04T00:54:41.5895236Z         6982945e09271d271f2f7985 test-acc-tf-s-8457605324373156284],
2026-02-04T00:54:41.5895619Z         BadRequestDetail: 
2026-02-04T00:54:41.5895974Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.58s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0680308Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-05T01:04:40.1101410Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-05T01:04:40.1159504Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-05T01:04:40.1160060Z     resource_test.go:156: Step 1/1 error: Error running pre-apply plan: exit status 1
2026-02-05T01:04:40.1160475Z         
2026-02-05T01:04:40.1160765Z         Error: error fetching resource
2026-02-05T01:04:40.1161042Z         
2026-02-05T01:04:40.1161420Z           with data.mongodbatlas_stream_connection.sample,
2026-02-05T01:04:40.1162103Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-02-05T01:04:40.1162754Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-02-05T01:04:40.1163226Z         
2026-02-05T01:04:40.1164243Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/connections/sample_stream_solar
2026-02-05T01:04:40.1165414Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-05T01:04:40.1166053Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-05T01:04:40.1166679Z         6983e6a2304923ebd1858df5 and name test-acc-tf-s-6349336018238537323 not
2026-02-05T01:04:40.1167245Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-05T01:04:40.1167780Z         6983e6a2304923ebd1858df5 test-acc-tf-s-6349336018238537323],
2026-02-05T01:04:40.1168180Z         BadRequestDetail: 
2026-02-05T01:04:40.1176931Z    test_name=TestAccStreamProcessor_withTier test_terraform_path=/home/runner/work/_temp/0be78826-63c2-4d6e-a87b-d6c482ad4b9d/terraform test_working_directory=/tmp/plugintest2206651516 test_step_number=1
2026-02-05T01:04:40.1187167Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.54s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
```
2026-02-06T00:56:32.5646763Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-06T00:56:32.6091086Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-06T00:56:32.6112672Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-06T00:56:32.6113236Z     resource_test.go:156: Step 1/1 error: Error running pre-apply plan: exit status 1
2026-02-06T00:56:32.6113659Z         
2026-02-06T00:56:32.6113943Z         Error: error fetching resource
2026-02-06T00:56:32.6114228Z         
2026-02-06T00:56:32.6114611Z           with data.mongodbatlas_stream_connection.sample,
2026-02-06T00:56:32.6115323Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-02-06T00:56:32.6115995Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-02-06T00:56:32.6116347Z         
2026-02-06T00:56:32.6117211Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar
2026-02-06T00:56:32.6118140Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-06T00:56:32.6118783Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-06T00:56:32.6119435Z         6985378713125e9acd98a203 and name test-acc-tf-s-69697366263959401 not found.
2026-02-06T00:56:32.6120083Z         Reason: Not Found. Params: [sample_stream_solar 6985378713125e9acd98a203
2026-02-06T00:56:32.6120862Z         test-acc-tf-s-69697366263959401], BadRequestDetail: 
2026-02-06T00:56:32.6121305Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.57s)
```


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 4 seconds
  - PASS 3 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 4 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 3 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 4 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 4 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 5 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
