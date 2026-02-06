# stream/streamprocessor/TestAccStreamProcessor_createErrors Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/connections/sample_stream_solar | dev |  | 0.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/connections/sample_stream_solar | dev |  | 0.06s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections/{connectionName} | dev | unknown | 0.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a moment
- 2026-01-09 PASS a moment
- 2026-01-10 PASS a moment
- 2026-01-11: MISSING
- 2026-01-12 PASS a moment
- 2026-01-13 PASS a moment
- 2026-01-14 PASS a second
- 2026-01-15 PASS a moment
- 2026-01-16 PASS a moment
- 2026-01-17 PASS a moment
- 2026-01-18: MISSING
- 2026-01-19 PASS a moment
- 2026-01-20 PASS a moment
- 2026-01-21 PASS a moment
- 2026-01-22 PASS a moment
- 2026-01-23 PASS a moment
- 2026-01-24 PASS a moment
- 2026-01-25: MISSING
- 2026-01-26 PASS a moment
- 2026-01-27 PASS a moment
- 2026-01-28 PASS a moment
- 2026-01-29 PASS a moment
- 2026-01-30: MISSING
- 2026-01-31 PASS a moment
- 2026-02-01: MISSING
- 2026-02-02 PASS a moment
- 2026-02-03
  - PASS a second
  - PASS a second
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5864815Z === RUN   TestAccStreamProcessor_createErrors
2026-02-04T00:54:41.5867428Z === CONT  TestAccStreamProcessor_createErrors
2026-02-04T00:54:41.5961215Z === NAME  TestAccStreamProcessor_createErrors
2026-02-04T00:54:41.5961861Z     resource_test.go:343: Step 2/2, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2026-02-04T00:54:41.5962367Z         
2026-02-04T00:54:41.5962671Z         Error: error fetching resource
2026-02-04T00:54:41.5962961Z         
2026-02-04T00:54:41.5963390Z           with data.mongodbatlas_stream_connection.sample,
2026-02-04T00:54:41.5964012Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2026-02-04T00:54:41.5964622Z           25:             data "mongodbatlas_stream_connection" "sample" {
2026-02-04T00:54:41.5964946Z         
2026-02-04T00:54:41.5965731Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/connections/sample_stream_solar
2026-02-04T00:54:41.5966560Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-04T00:54:41.5967144Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-04T00:54:41.5967840Z         6982945e09271d271f2f7985 and name test-acc-tf-s-8457605324373156284 not
2026-02-04T00:54:41.5968368Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-04T00:54:41.5968860Z         6982945e09271d271f2f7985 test-acc-tf-s-8457605324373156284],
2026-02-04T00:54:41.5969236Z         BadRequestDetail: 
2026-02-04T00:54:41.5969548Z --- FAIL: TestAccStreamProcessor_createErrors (0.67s)
```

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
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-02-06T00:56:32.608000+00:00-TestAccStreamProcessor_createErrors',confidence=1.0,ts_when='10 minutes ago')
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


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS a moment
  - PASS a moment
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS a moment
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS a moment
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS a moment
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS a moment
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS a moment
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS a second
- 2026-02-05: MISSING
- 2026-02-06: MISSING
