# stream/streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 18) FAIL(x 2)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/connections/sample_stream_solar | dev | 4.09s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar | dev | 6.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 9 seconds
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 12 seconds
- 2026-01-13: MISSING
- 2026-01-14 PASS 11 seconds
- 2026-01-15: MISSING
- 2026-01-16 PASS 9 seconds
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 13 seconds
- 2026-01-20: MISSING
- 2026-01-21 PASS 11 seconds
- 2026-01-22: MISSING
- 2026-01-23 PASS 11 seconds
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 9 seconds
- 2026-01-27: MISSING
- 2026-01-28 PASS 9 seconds
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02 PASS 12 seconds
- 2026-02-03: MISSING
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5489759Z === RUN   TestMigStreamProcessor_basic
2026-02-04T00:54:41.5491268Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-5315260556283040040
2026-02-04T00:54:41.5492897Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-8457605324373156284
2026-02-04T00:54:41.5866787Z === CONT  TestMigStreamProcessor_basic
2026-02-04T00:54:41.5978877Z === NAME  TestMigStreamProcessor_basic
2026-02-04T00:54:41.5979396Z     resource_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2026-02-04T00:54:41.5979856Z         
2026-02-04T00:54:41.5980137Z         Error: error fetching resource
2026-02-04T00:54:41.5980421Z         
2026-02-04T00:54:41.5980786Z           with data.mongodbatlas_stream_connection.sample,
2026-02-04T00:54:41.5981417Z           on terraform_plugin_test.tf line 27, in data "mongodbatlas_stream_connection" "sample":
2026-02-04T00:54:41.5982034Z           27:             data "mongodbatlas_stream_connection" "sample" {
2026-02-04T00:54:41.5982349Z         
2026-02-04T00:54:41.5983207Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/connections/sample_stream_solar
2026-02-04T00:54:41.5984177Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-04T00:54:41.5984768Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-04T00:54:41.5985333Z         6982945e09271d271f2f7985 and name test-acc-tf-s-8457605324373156284 not
2026-02-04T00:54:41.5985863Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-04T00:54:41.5986344Z         6982945e09271d271f2f7985 test-acc-tf-s-8457605324373156284],
2026-02-04T00:54:41.5986730Z         BadRequestDetail: 
2026-02-04T00:54:41.5987014Z --- FAIL: TestMigStreamProcessor_basic (4.86s)
```

- 2026-02-05: MISSING
- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
```
2026-02-06T00:56:32.5639617Z === RUN   TestMigStreamProcessor_basic
2026-02-06T00:56:32.5641003Z     resource_migration_test.go:11: Creating execution project (1): test-acc-tf-p-3935339712897436282
2026-02-06T00:56:32.5642473Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-69697366263959401
2026-02-06T00:56:32.6089252Z === CONT  TestMigStreamProcessor_basic
2026-02-06T00:56:32.6230629Z === NAME  TestMigStreamProcessor_basic
2026-02-06T00:56:32.6231183Z     resource_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2026-02-06T00:56:32.6231621Z         
2026-02-06T00:56:32.6231897Z         Error: error fetching resource
2026-02-06T00:56:32.6232163Z         
2026-02-06T00:56:32.6232538Z           with data.mongodbatlas_stream_connection.sample,
2026-02-06T00:56:32.6233220Z           on terraform_plugin_test.tf line 27, in data "mongodbatlas_stream_connection" "sample":
2026-02-06T00:56:32.6233880Z           27:             data "mongodbatlas_stream_connection" "sample" {
2026-02-06T00:56:32.6234217Z         
2026-02-06T00:56:32.6235067Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar
2026-02-06T00:56:32.6235998Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-06T00:56:32.6236630Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-06T00:56:32.6237271Z         6985378713125e9acd98a203 and name test-acc-tf-s-69697366263959401 not found.
2026-02-06T00:56:32.6237911Z         Reason: Not Found. Params: [sample_stream_solar 6985378713125e9acd98a203
2026-02-06T00:56:32.6238453Z         test-acc-tf-s-69697366263959401], BadRequestDetail: 
2026-02-06T00:56:32.6238831Z --- FAIL: TestMigStreamProcessor_basic (6.79s)
```


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 11 seconds
  - PASS 8 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 11 seconds
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
- 2026-01-22 PASS 9 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 12 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 11 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
