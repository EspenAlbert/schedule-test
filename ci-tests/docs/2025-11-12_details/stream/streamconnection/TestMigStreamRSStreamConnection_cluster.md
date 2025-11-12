# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 31 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-12 02:46](#error-2025-10-12t0246540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68eaf645bae6807c7549827a/streams/test-acc-tf-s-12914442530019558/connections | qa | flaky_500 | 1733.00s
[2025-10-13 01:00](#error-2025-10-13t0100440000) |  | dev |  | 1266.01s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 607.08s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 13 minutes
- 2025-10-05 PASS 8 minutes
- 2025-10-06 PASS 8 minutes
- 2025-10-07 PASS 11 minutes
- 2025-10-08 PASS 11 minutes
- 2025-10-09 PASS 17 minutes
- 2025-10-10 PASS 11 minutes
- 2025-10-11 PASS 12 minutes
- 2025-10-12

### Error 2025-10-12T02:46:54+00:00
```
2025-10-12T02:46:54.3405134Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-10-12T02:46:54.3405826Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-3150885957299734261
2025-10-12T02:46:54.3406406Z 2025/10/12 00:28:56 [DEBUG] Waiting for state to become: [IDLE]
2025-10-12T02:46:54.3406801Z 2025/10/12 00:31:56 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3407172Z 2025/10/12 00:32:56 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3407528Z 2025/10/12 00:33:07 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3407883Z 2025/10/12 00:34:07 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3408235Z 2025/10/12 00:34:17 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3408587Z 2025/10/12 00:35:17 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3408932Z 2025/10/12 00:35:27 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3409289Z 2025/10/12 00:36:28 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3409635Z 2025/10/12 00:36:38 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3409983Z 2025/10/12 00:37:38 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3410340Z 2025/10/12 00:37:48 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3410684Z 2025/10/12 00:38:48 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3412279Z 2025/10/12 00:38:59 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3412637Z 2025/10/12 00:39:59 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3413130Z 2025/10/12 00:40:09 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3413480Z 2025/10/12 00:41:09 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3413999Z 2025/10/12 00:41:19 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3414368Z 2025/10/12 00:42:20 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3414852Z 2025/10/12 00:42:30 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3415206Z 2025/10/12 00:43:30 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3415696Z 2025/10/12 00:43:40 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3416067Z 2025/10/12 00:44:40 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3416555Z 2025/10/12 00:44:50 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3416901Z 2025/10/12 00:45:51 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3417436Z 2025/10/12 00:46:01 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3417786Z 2025/10/12 00:47:01 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3418264Z 2025/10/12 00:47:11 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3418610Z 2025/10/12 00:48:12 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3419348Z 2025/10/12 00:48:22 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3419857Z 2025/10/12 00:49:22 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3420202Z 2025/10/12 00:49:32 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3420675Z 2025/10/12 00:50:32 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3421139Z 2025/10/12 00:50:42 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3421618Z 2025/10/12 00:51:43 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3422264Z 2025/10/12 00:51:53 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3422643Z 2025/10/12 00:52:53 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3423096Z 2025/10/12 00:53:03 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3423458Z 2025/10/12 00:54:03 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3423891Z 2025/10/12 00:54:13 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3424273Z 2025/10/12 00:55:14 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3424705Z 2025/10/12 00:55:24 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3425095Z 2025/10/12 00:56:24 [TRACE] Waiting 10s before next try
2025-10-12T02:46:54.3425501Z 2025/10/12 00:56:34 [TRACE] Waiting 1m0s before next try
2025-10-12T02:46:54.3467473Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-10-12T02:46:54.3499452Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-10-12T02:46:54.3500067Z     resource_stream_connection_migration_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-10-12T02:46:54.3500542Z         
2025-10-12T02:46:54.3500832Z         Error: error creating resource
2025-10-12T02:46:54.3501242Z         
2025-10-12T02:46:54.3501597Z           with mongodbatlas_stream_connection.test,
2025-10-12T02:46:54.3502282Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-10-12T02:46:54.3502904Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-12T02:46:54.3503242Z         
2025-10-12T02:46:54.3504004Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf645bae6807c7549827a/streams/test-acc-tf-s-12914442530019558/connections
2025-10-12T02:46:54.3504875Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-12T02:46:54.3505494Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-12T02:46:54.3506060Z         BadRequestDetail: 
2025-10-12T02:46:54.3506414Z --- FAIL: TestMigStreamRSStreamConnection_cluster (1733.03s)
```

- 2025-10-13

### Error 2025-10-13T01:00:44+00:00
```
2025-10-13T01:00:44.5409502Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-10-13T01:00:44.5410429Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-6740110699361029749
2025-10-13T01:00:44.5411232Z 2025/10/13 00:29:41 [DEBUG] Waiting for state to become: [IDLE]
2025-10-13T01:00:44.5411757Z 2025/10/13 00:32:42 [TRACE] Waiting 1m0s before next try
2025-10-13T01:00:44.5412244Z 2025/10/13 00:33:42 [TRACE] Waiting 10s before next try
2025-10-13T01:00:44.5412729Z 2025/10/13 00:33:52 [TRACE] Waiting 1m0s before next try
2025-10-13T01:00:44.5413205Z 2025/10/13 00:34:52 [TRACE] Waiting 10s before next try
2025-10-13T01:00:44.5413697Z 2025/10/13 00:35:02 [TRACE] Waiting 1m0s before next try
2025-10-13T01:00:44.5414172Z 2025/10/13 00:36:02 [TRACE] Waiting 10s before next try
2025-10-13T01:00:44.5414659Z 2025/10/13 00:36:13 [TRACE] Waiting 1m0s before next try
2025-10-13T01:00:44.5415154Z 2025/10/13 00:37:13 [TRACE] Waiting 10s before next try
2025-10-13T01:00:44.5415640Z 2025/10/13 00:37:23 [TRACE] Waiting 1m0s before next try
2025-10-13T01:00:44.5416113Z 2025/10/13 00:38:23 [TRACE] Waiting 10s before next try
2025-10-13T01:00:44.5416600Z 2025/10/13 00:38:33 [TRACE] Waiting 1m0s before next try
2025-10-13T01:00:44.5417066Z 2025/10/13 00:39:33 [TRACE] Waiting 10s before next try
2025-10-13T01:00:44.5417458Z 2025/10/13 00:39:44 [TRACE] Waiting 1m0s before next try
2025-10-13T01:00:44.5437634Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-10-13T01:00:44.5517563Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-10-13T01:00:44.5518236Z     resource_stream_connection_migration_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:00:44.5518809Z         
2025-10-13T01:00:44.5519123Z         Error: error fetching results
2025-10-13T01:00:44.5519408Z         
2025-10-13T01:00:44.5519833Z           with data.mongodbatlas_stream_connections.test,
2025-10-13T01:00:44.5520604Z           on terraform_plugin_test.tf line 20, in data "mongodbatlas_stream_connections" "test":
2025-10-13T01:00:44.5521252Z           20: data "mongodbatlas_stream_connections" "test" {
2025-10-13T01:00:44.5521574Z         
2025-10-13T01:00:44.5522112Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:00:44.5545587Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-10-13T01:00:44.5546225Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-13T01:00:44.5546668Z         
2025-10-13T01:00:44.5546992Z         Error: error deleting resource
2025-10-13T01:00:44.5547389Z         
2025-10-13T01:00:44.5547938Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:00:44.5548759Z --- FAIL: TestMigStreamRSStreamConnection_cluster (1266.13s)
```

- 2025-10-14 PASS 11 minutes
- 2025-10-15 PASS 10 minutes
- 2025-10-16 PASS 11 minutes
- 2025-10-17 PASS 12 minutes
- 2025-10-18: MISSING
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1438106Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-10-19T00:50:12.1438892Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-7639691654272666770
2025-10-19T00:50:12.1439562Z 2025/10/19 00:32:21 [DEBUG] Waiting for state to become: [IDLE]
2025-10-19T00:50:12.1439951Z 2025/10/19 00:35:22 [TRACE] Waiting 1m0s before next try
2025-10-19T00:50:12.1440610Z 2025/10/19 00:36:22 [TRACE] Waiting 10s before next try
2025-10-19T00:50:12.1441082Z 2025/10/19 00:36:32 [TRACE] Waiting 1m0s before next try
2025-10-19T00:50:12.1441434Z 2025/10/19 00:37:33 [TRACE] Waiting 10s before next try
2025-10-19T00:50:12.1441899Z 2025/10/19 00:37:43 [TRACE] Waiting 1m0s before next try
2025-10-19T00:50:12.1442240Z 2025/10/19 00:38:43 [TRACE] Waiting 10s before next try
2025-10-19T00:50:12.1442686Z 2025/10/19 00:38:53 [TRACE] Waiting 1m0s before next try
2025-10-19T00:50:12.1443026Z 2025/10/19 00:39:54 [TRACE] Waiting 10s before next try
2025-10-19T00:50:12.1443490Z 2025/10/19 00:40:04 [TRACE] Waiting 1m0s before next try
2025-10-19T00:50:12.1443932Z 2025/10/19 00:41:05 [TRACE] Waiting 10s before next try
2025-10-19T00:50:12.1444389Z 2025/10/19 00:41:15 [TRACE] Waiting 1m0s before next try
2025-10-19T00:50:12.1444733Z 2025/10/19 00:42:15 [TRACE] Waiting 10s before next try
2025-10-19T00:50:12.1479484Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-10-19T00:50:12.1642970Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-10-19T00:50:12.1643619Z     resource_stream_connection_migration_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1644081Z         
2025-10-19T00:50:12.1644374Z         Error: error creating resource
2025-10-19T00:50:12.1644644Z         
2025-10-19T00:50:12.1644987Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1645650Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1646265Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1646584Z         
2025-10-19T00:50:12.1647509Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1648349Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1648942Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1649557Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1650132Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1650526Z         BadRequestDetail: 
2025-10-19T00:50:12.1650859Z --- FAIL: TestMigStreamRSStreamConnection_cluster (607.84s)
```

- 2025-10-20 PASS 10 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 13 minutes
  - PASS 9 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS 12 minutes
- 2025-10-25: MISSING
- 2025-10-26 PASS 8 minutes
- 2025-10-27 PASS 25 minutes
- 2025-10-28: MISSING
- 2025-10-29 PASS 12 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 10 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 8 minutes
- 2025-11-03 PASS 8 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 23 minutes
  - PASS 11 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 12 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 8 minutes
- 2025-11-10 PASS 8 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 10 minutes