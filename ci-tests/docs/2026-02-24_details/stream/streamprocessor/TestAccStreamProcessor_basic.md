# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/connections/sample_stream_solar | dev |  | 0.06s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/connections/sample_stream_solar | dev |  | 4.06s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar | dev |  | 0.06s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/connections/sample_stream_solar | dev |  | 9.07s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 8.02s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 7 seconds
- 2026-01-27 PASS 11 seconds
- 2026-01-28 PASS 7 seconds
- 2026-01-29 PASS 10 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 10 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 8 seconds
- 2026-02-03
  - PASS 13 seconds
  - PASS 14 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5495921Z === RUN   TestAccStreamProcessor_basic
2026-02-04T00:54:41.5868831Z === CONT  TestAccStreamProcessor_basic
2026-02-04T00:54:41.5871113Z   diagnostic_detail=
2026-02-04T00:54:41.5873061Z    diagnostic_attribute="AttributeName(\"pipeline\")" tf_resource_type=mongodbatlas_stream_processor
2026-02-04T00:54:41.5886943Z    test_name=TestAccStreamProcessor_JSONWhiteSpaceFormat test_terraform_path=/home/runner/work/_temp/acf6f1af-5510-4765-8882-896c7ecb941f/terraform test_working_directory=/tmp/plugintest2676893940
2026-02-04T00:54:41.5935125Z === NAME  TestAccStreamProcessor_basic
2026-02-04T00:54:41.5935681Z     resource_test.go:53: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-02-04T00:54:41.5936097Z         
2026-02-04T00:54:41.5936474Z         Error: error fetching resource
2026-02-04T00:54:41.5936746Z         
2026-02-04T00:54:41.5937259Z           with data.mongodbatlas_stream_connection.sample,
2026-02-04T00:54:41.5938039Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-02-04T00:54:41.5938736Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-02-04T00:54:41.5939063Z         
2026-02-04T00:54:41.5939933Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/connections/sample_stream_solar
2026-02-04T00:54:41.5940894Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-04T00:54:41.5941539Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-04T00:54:41.5942221Z         6982945e09271d271f2f7985 and name test-acc-tf-s-8457605324373156284 not
2026-02-04T00:54:41.5942884Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-04T00:54:41.5943450Z         6982945e09271d271f2f7985 test-acc-tf-s-8457605324373156284],
2026-02-04T00:54:41.5943831Z         BadRequestDetail: 
2026-02-04T00:54:41.5944557Z --- FAIL: TestAccStreamProcessor_basic (0.62s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0677568Z === RUN   TestAccStreamProcessor_basic
2026-02-05T01:04:40.0678127Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-8690412479001292153
2026-02-05T01:04:40.0678831Z     resource_test.go:53: Creating execution stream instance: test-acc-tf-s-6349336018238537323
2026-02-05T01:04:40.1099912Z === CONT  TestAccStreamProcessor_basic
2026-02-05T01:04:40.1122787Z === NAME  TestAccStreamProcessor_basic
2026-02-05T01:04:40.1123439Z     resource_test.go:53: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-02-05T01:04:40.1129368Z         
2026-02-05T01:04:40.1129685Z         Error: error fetching resource
2026-02-05T01:04:40.1129986Z         
2026-02-05T01:04:40.1130383Z           with data.mongodbatlas_stream_connection.sample,
2026-02-05T01:04:40.1131083Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-02-05T01:04:40.1131936Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-02-05T01:04:40.1132289Z         
2026-02-05T01:04:40.1133327Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/connections/sample_stream_solar
2026-02-05T01:04:40.1134287Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-05T01:04:40.1134936Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-05T01:04:40.1135574Z         6983e6a2304923ebd1858df5 and name test-acc-tf-s-6349336018238537323 not
2026-02-05T01:04:40.1136148Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-05T01:04:40.1136678Z         6983e6a2304923ebd1858df5 test-acc-tf-s-6349336018238537323],
2026-02-05T01:04:40.1137083Z         BadRequestDetail: 
2026-02-05T01:04:40.1143816Z --- FAIL: TestAccStreamProcessor_basic (4.60s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
```
2026-02-06T00:56:32.5643976Z === RUN   TestAccStreamProcessor_basic
2026-02-06T00:56:32.6091446Z === CONT  TestAccStreamProcessor_basic
2026-02-06T00:56:32.6094977Z   diagnostic_detail=
2026-02-06T00:56:32.6096739Z   
2026-02-06T00:56:32.6111708Z    test_working_directory=/tmp/plugintest1792619293 test_name=TestAccStreamProcessor_JSONWhiteSpaceFormat test_terraform_path=/home/runner/work/_temp/4658afad-353d-4993-8600-6b48e8658f13/terraform test_step_number=1
2026-02-06T00:56:32.6136877Z === NAME  TestAccStreamProcessor_basic
2026-02-06T00:56:32.6137392Z     resource_test.go:53: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-02-06T00:56:32.6137803Z         
2026-02-06T00:56:32.6138087Z         Error: error fetching resource
2026-02-06T00:56:32.6138368Z         
2026-02-06T00:56:32.6138742Z           with data.mongodbatlas_stream_connection.sample,
2026-02-06T00:56:32.6139436Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-02-06T00:56:32.6140089Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-02-06T00:56:32.6140617Z         
2026-02-06T00:56:32.6141521Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar
2026-02-06T00:56:32.6142450Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-06T00:56:32.6143082Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-06T00:56:32.6143725Z         6985378713125e9acd98a203 and name test-acc-tf-s-69697366263959401 not found.
2026-02-06T00:56:32.6144373Z         Reason: Not Found. Params: [sample_stream_solar 6985378713125e9acd98a203
2026-02-06T00:56:32.6144919Z         test-acc-tf-s-69697366263959401], BadRequestDetail: 
2026-02-06T00:56:32.6160653Z   
2026-02-06T00:56:32.6169401Z --- FAIL: TestAccStreamProcessor_basic (0.60s)
```

- 2026-02-07
  - FAIL 9 seconds

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6153447Z === RUN   TestAccStreamProcessor_basic
2026-02-07T00:56:32.6153991Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-7334061312631928091
2026-02-07T00:56:32.6154675Z     resource_test.go:53: Creating execution stream instance: test-acc-tf-s-1370710812024176273
2026-02-07T00:56:32.6558018Z === CONT  TestAccStreamProcessor_basic
2026-02-07T00:56:32.6611635Z === NAME  TestAccStreamProcessor_basic
2026-02-07T00:56:32.6612146Z     resource_test.go:53: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-02-07T00:56:32.6612700Z         
2026-02-07T00:56:32.6613004Z         Error: error fetching resource
2026-02-07T00:56:32.6613271Z         
2026-02-07T00:56:32.6613640Z           with data.mongodbatlas_stream_connection.sample,
2026-02-07T00:56:32.6614321Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-02-07T00:56:32.6614966Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-02-07T00:56:32.6615303Z         
2026-02-07T00:56:32.6616162Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/connections/sample_stream_solar
2026-02-07T00:56:32.6617084Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-07T00:56:32.6617709Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-07T00:56:32.6618442Z         6986890ede0bdc0de28a3d42 and name test-acc-tf-s-1370710812024176273 not
2026-02-07T00:56:32.6619009Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-07T00:56:32.6619524Z         6986890ede0bdc0de28a3d42 test-acc-tf-s-1370710812024176273],
2026-02-07T00:56:32.6619924Z         BadRequestDetail: 
2026-02-07T00:56:32.6629479Z   
2026-02-07T00:56:32.6645066Z --- FAIL: TestAccStreamProcessor_basic (9.67s)
```

  - PASS 14 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 7 seconds
- 2026-02-10 PASS 10 seconds
- 2026-02-11 PASS 10 seconds
- 2026-02-12
  - PASS 10 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.7744988Z === RUN   TestAccStreamProcessor_basic
2026-02-12T18:47:26.7745905Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-1135061849802274891
2026-02-12T18:47:26.7747228Z     resource_test.go:53: 
2026-02-12T18:47:26.7749529Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.7752652Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.7755974Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.7759236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.7762406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-02-12T18:47:26.7765819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-02-12T18:47:26.7767241Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.7772415Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7774842Z         	Test:       	TestAccStreamProcessor_basic
2026-02-12T18:47:26.7779139Z         	Messages:   	Project creation failed: test-acc-tf-p-1135061849802274891, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7781854Z --- FAIL: TestAccStreamProcessor_basic (0.22s)
```

- 2026-02-13 PASS 9 seconds
- 2026-02-14 PASS 13 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 7 seconds
- 2026-02-17 PASS 11 seconds
- 2026-02-18 PASS 7 seconds
- 2026-02-19 PASS 11 seconds
- 2026-02-20 PASS 9 seconds
- 2026-02-21 PASS 13 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 9 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2227318Z === RUN   TestAccStreamProcessor_basic
2026-02-24T01:09:13.2227887Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-6100321950639444017
2026-02-24T01:09:13.2228579Z     resource_test.go:53: Creating execution stream instance: test-acc-tf-s-3188372230220528800
2026-02-24T01:09:13.2456741Z === CONT  TestAccStreamProcessor_basic
2026-02-24T01:09:13.2536510Z === NAME  TestAccStreamProcessor_basic
2026-02-24T01:09:13.2536998Z     resource_test.go:53: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:09:13.2537377Z         
2026-02-24T01:09:13.2537654Z         Error: error creating resource
2026-02-24T01:09:13.2538064Z         
2026-02-24T01:09:13.2538436Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2539141Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2539817Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2540159Z         
2026-02-24T01:09:13.2540626Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2541047Z         type
2026-02-24T01:09:13.2541324Z --- FAIL: TestAccStreamProcessor_basic (8.16s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 7 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 10 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 9 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 7 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 5 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 8 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
