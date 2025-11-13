# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 21 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa | 607.08s

## Timeline
- 2025-10-14: MISSING
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
- 2025-11-13 PASS 10 minutes