# stream/streamprocessor/TestAccStreamProcessor_createErrors Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/connections/sample_stream_solar | dev |  | 0.06s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections/{connectionName} | dev | unknown | 0.07s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/connections/sample_stream_solar | dev |  | 0.07s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.1097929Z === RUN   TestAccStreamProcessor_createErrors
2026-02-05T01:04:40.1100576Z === CONT  TestAccStreamProcessor_createErrors
2026-02-05T01:04:40.1203715Z === NAME  TestAccStreamProcessor_createErrors
2026-02-05T01:04:40.1204411Z     resource_test.go:343: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2026-02-05T01:04:40.1204942Z         
2026-02-05T01:04:40.1205230Z         Error: error fetching resource
2026-02-05T01:04:40.1205506Z         
2026-02-05T01:04:40.1205881Z           with data.mongodbatlas_stream_connection.sample,
2026-02-05T01:04:40.1206709Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-02-05T01:04:40.1207364Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-02-05T01:04:40.1207709Z         
2026-02-05T01:04:40.1208563Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/connections/sample_stream_solar
2026-02-05T01:04:40.1209491Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-05T01:04:40.1210119Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-05T01:04:40.1210744Z         6983e6a2304923ebd1858df5 and name test-acc-tf-s-6349336018238537323 not
2026-02-05T01:04:40.1211303Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-05T01:04:40.1211828Z         6983e6a2304923ebd1858df5 test-acc-tf-s-6349336018238537323],
2026-02-05T01:04:40.1212236Z         BadRequestDetail: 
2026-02-05T01:04:40.1212669Z --- FAIL: TestAccStreamProcessor_createErrors (0.61s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-02-06T00:56:32.608000+00:00-TestAccStreamProcessor_createErrors',confidence=1.0,ts_when='27 days ago')
API Error STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections/{connectionName}
```
2026-02-06T00:56:32.6087248Z === RUN   TestAccStreamProcessor_createErrors
2026-02-06T00:56:32.6089912Z === CONT  TestAccStreamProcessor_createErrors
2026-02-06T00:56:32.6186031Z === NAME  TestAccStreamProcessor_createErrors
2026-02-06T00:56:32.6186728Z     resource_test.go:343: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2026-02-06T00:56:32.6187258Z         
2026-02-06T00:56:32.6187543Z         Error: error fetching resource
2026-02-06T00:56:32.6187815Z         
2026-02-06T00:56:32.6188192Z           with data.mongodbatlas_stream_connection.sample,
2026-02-06T00:56:32.6188878Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-02-06T00:56:32.6189537Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-02-06T00:56:32.6189871Z         
2026-02-06T00:56:32.6190829Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar
2026-02-06T00:56:32.6191742Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-06T00:56:32.6192370Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-06T00:56:32.6193016Z         6985378713125e9acd98a203 and name test-acc-tf-s-69697366263959401 not found.
2026-02-06T00:56:32.6193659Z         Reason: Not Found. Params: [sample_stream_solar 6985378713125e9acd98a203
2026-02-06T00:56:32.6194205Z         test-acc-tf-s-69697366263959401], BadRequestDetail: 
2026-02-06T00:56:32.6194598Z --- FAIL: TestAccStreamProcessor_createErrors (0.67s)
```

- 2026-02-07
  - FAIL a moment

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6556080Z === RUN   TestAccStreamProcessor_createErrors
2026-02-07T00:56:32.6558653Z === CONT  TestAccStreamProcessor_createErrors
2026-02-07T00:56:32.6655431Z === NAME  TestAccStreamProcessor_createErrors
2026-02-07T00:56:32.6656117Z     resource_test.go:343: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2026-02-07T00:56:32.6656648Z         
2026-02-07T00:56:32.6656923Z         Error: error fetching resource
2026-02-07T00:56:32.6657194Z         
2026-02-07T00:56:32.6657559Z           with data.mongodbatlas_stream_connection.sample,
2026-02-07T00:56:32.6658242Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-02-07T00:56:32.6659021Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-02-07T00:56:32.6659354Z         
2026-02-07T00:56:32.6660211Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/connections/sample_stream_solar
2026-02-07T00:56:32.6661130Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-07T00:56:32.6661752Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-07T00:56:32.6662358Z         6986890ede0bdc0de28a3d42 and name test-acc-tf-s-1370710812024176273 not
2026-02-07T00:56:32.6663102Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-07T00:56:32.6663628Z         6986890ede0bdc0de28a3d42 test-acc-tf-s-1370710812024176273],
2026-02-07T00:56:32.6664027Z         BadRequestDetail: 
2026-02-07T00:56:32.6664339Z --- FAIL: TestAccStreamProcessor_createErrors (0.66s)
```

  - PASS a moment
- 2026-02-08: MISSING
- 2026-02-09 PASS a second
- 2026-02-10 PASS a moment
- 2026-02-11 PASS a second
- 2026-02-12
  - PASS a moment
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.8425773Z === RUN   TestAccStreamProcessor_createErrors
2026-02-12T18:47:26.8426683Z     resource_test.go:337: Creating execution project (1): test-acc-tf-p-5100038889766911948
2026-02-12T18:47:26.8427623Z     resource_test.go:337: 
2026-02-12T18:47:26.8429076Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.8431980Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.8435127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.8438525Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.8441861Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:337
2026-02-12T18:47:26.8443951Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:26.8445146Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.8450197Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8452574Z         	Test:       	TestAccStreamProcessor_createErrors
2026-02-12T18:47:26.8456762Z         	Messages:   	Project creation failed: test-acc-tf-p-5100038889766911948, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8459519Z --- FAIL: TestAccStreamProcessor_createErrors (0.24s)
```

- 2026-02-13 PASS a second
- 2026-02-14 PASS a moment
- 2026-02-15: MISSING
- 2026-02-16 PASS a moment
- 2026-02-17 PASS a moment
- 2026-02-18 PASS a second
- 2026-02-19 PASS a moment
- 2026-02-20 PASS a moment
- 2026-02-21 PASS a moment
- 2026-02-22: MISSING
- 2026-02-23 PASS a second
- 2026-02-24 PASS a moment
- 2026-02-25
  - PASS a moment
  - PASS a moment
- 2026-02-26 PASS a second
- 2026-02-27
  - PASS a moment
  - PASS a second
- 2026-02-28 PASS a second
- 2026-03-01: MISSING
- 2026-03-02 PASS a second
- 2026-03-03 PASS a second
- 2026-03-04 PASS a moment
- 2026-03-05 PASS a moment
- 2026-03-06 PASS a second

## QA Environment
### Timeline
- 2026-02-04 PASS a second
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS a moment
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS a second
- 2026-02-16: MISSING
- 2026-02-17 PASS a second
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS a moment
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS a moment
- 2026-03-02: MISSING
- 2026-03-03 PASS a second
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
