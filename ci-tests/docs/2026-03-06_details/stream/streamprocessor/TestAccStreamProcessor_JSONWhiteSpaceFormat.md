# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/connections/sample_stream_solar | dev | 0.05s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar | dev | 0.06s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/connections/sample_stream_solar | dev | 0.06s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s

### Timeline
- 2026-02-04: MISSING
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

- 2026-02-07
  - FAIL a moment

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6156140Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-07T00:56:32.6559327Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-07T00:56:32.6580662Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-07T00:56:32.6581206Z     resource_test.go:156: Step 1/1 error: Error running pre-apply plan: exit status 1
2026-02-07T00:56:32.6581616Z         
2026-02-07T00:56:32.6581896Z         Error: error fetching resource
2026-02-07T00:56:32.6582169Z         
2026-02-07T00:56:32.6582540Z           with data.mongodbatlas_stream_connection.sample,
2026-02-07T00:56:32.6583407Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-02-07T00:56:32.6584063Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-02-07T00:56:32.6584394Z         
2026-02-07T00:56:32.6585256Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/connections/sample_stream_solar
2026-02-07T00:56:32.6586369Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-07T00:56:32.6587001Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-07T00:56:32.6587626Z         6986890ede0bdc0de28a3d42 and name test-acc-tf-s-1370710812024176273 not
2026-02-07T00:56:32.6588192Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-07T00:56:32.6588727Z         6986890ede0bdc0de28a3d42 test-acc-tf-s-1370710812024176273],
2026-02-07T00:56:32.6589128Z         BadRequestDetail: 
2026-02-07T00:56:32.6589476Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.57s)
```

  - PASS 4 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 3 seconds
- 2026-02-10 PASS 4 seconds
- 2026-02-11 PASS 5 seconds
- 2026-02-12
  - PASS 4 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.7817776Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-12T18:47:26.7818982Z     resource_test.go:151: Creating execution project (1): test-acc-tf-p-743488203402195047
2026-02-12T18:47:26.7819850Z     resource_test.go:151: 
2026-02-12T18:47:26.7821415Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.7824570Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.7827952Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.7831148Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.7834518Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:151
2026-02-12T18:47:26.7836639Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:26.7837675Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.7842610Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7845144Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2026-02-12T18:47:26.7849465Z         	Messages:   	Project creation failed: test-acc-tf-p-743488203402195047, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7852256Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.26s)
```

- 2026-02-13 PASS 4 seconds
- 2026-02-14 PASS 4 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 4 seconds
- 2026-02-17 PASS 4 seconds
- 2026-02-18 PASS 3 seconds
- 2026-02-19 PASS 4 seconds
- 2026-02-20 PASS 5 seconds
- 2026-02-21 PASS 4 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 5 seconds
- 2026-02-24 PASS 17 seconds
- 2026-02-25
  - PASS 4 seconds
  - PASS 4 seconds
- 2026-02-26 PASS 5 seconds
- 2026-02-27
  - PASS 4 seconds
  - PASS 5 seconds
- 2026-02-28 PASS 5 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 4 seconds
- 2026-03-03 PASS 4 seconds
- 2026-03-04 PASS 4 seconds
- 2026-03-05 PASS 4 seconds
- 2026-03-06 PASS 5 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 5 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 4 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 3 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 3 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 4 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 3 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 3 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
