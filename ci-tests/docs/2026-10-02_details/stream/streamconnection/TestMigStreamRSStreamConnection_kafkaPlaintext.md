# stream/streamconnection/TestMigStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 25 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 23) FAIL(x 2)
Success rate: 92.00%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-16 01:37](#error-2026-09-16t0137530000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections | dev | 6.00s
[2026-09-29 15:24](#error-2026-09-29t1524490000) | USER_CANNOT_ACCESS_GROUP /api/atlas/v2/groups/6abbc0e41d8c0f7732567b51/streams/test-acc-tf-s-7247081934929538434/connections/kafka-conn-plaintext-mig | dev | 12.07s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 11 seconds
- 2026-09-03: MISSING
- 2026-09-04 PASS 11 seconds
- 2026-09-05: MISSING
- 2026-09-06: MISSING
- 2026-09-07 PASS 13 seconds
- 2026-09-08: MISSING
- 2026-09-09 PASS 12 seconds
- 2026-09-10: MISSING
- 2026-09-11
  - PASS 14 seconds
  - PASS 13 seconds
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 12 seconds
- 2026-09-15: MISSING
- 2026-09-16

### Error 2026-09-16T01:37:53+00:00
```
2026-09-16T01:37:53.6629190Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2026-09-16T01:37:53.6630595Z     resource_stream_connection_migration_test.go:12: Creating execution project (1): test-acc-tf-p-7196545536483139649
2026-09-16T01:37:53.6632236Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-9171587775280842368
2026-09-16T01:37:53.6642532Z   
2026-09-16T01:37:53.6643129Z     resource_stream_connection_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2026-09-16T01:37:53.6643662Z         
2026-09-16T01:37:53.6644014Z         Error: error creating resource
2026-09-16T01:37:53.6644525Z         
2026-09-16T01:37:53.6644941Z           with mongodbatlas_stream_connection.test,
2026-09-16T01:37:53.6645896Z           on terraform_plugin_test.tf line 27, in resource "mongodbatlas_stream_connection" "test":
2026-09-16T01:37:53.6646613Z           27: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-16T01:37:53.6647006Z         
2026-09-16T01:37:53.6647884Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections
2026-09-16T01:37:53.6648791Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-16T01:37:53.6649508Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-16T01:37:53.6650243Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-16T01:37:53.6650808Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (6.02s)
```

- 2026-09-17: MISSING
- 2026-09-18 PASS 11 seconds
- 2026-09-19: MISSING
- 2026-09-20: MISSING
- 2026-09-21 PASS 13 seconds
- 2026-09-22: MISSING
- 2026-09-23 PASS 14 seconds
- 2026-09-24: MISSING
- 2026-09-25 PASS 11 seconds
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 13 seconds
- 2026-09-29
  - FAIL 12 seconds

### Error 2026-09-29T15:24:49+00:00
```
2026-09-29T15:24:49.0282038Z === RUN   TestMigStreamRSStreamConnection_kafkaPlaintext
2026-09-29T15:24:49.0282832Z     resource_stream_connection_migration_test.go:12: Creating execution project (1): test-acc-tf-p-7031367759668708959
2026-09-29T15:24:49.0283967Z     resource_stream_connection_migration_test.go:12: Creating execution stream instance: test-acc-tf-s-7247081934929538434
2026-09-29T15:24:49.0296344Z    test_terraform_path=/home/runner/work/_temp/5f3187db-e638-481e-829b-d4aacb731e9e/terraform test_name=TestMigStreamRSStreamConnection_kafkaPlaintext test_working_directory=/tmp/plugintest3146736275 test_step_number=2
2026-09-29T15:24:49.0297608Z     resource_stream_connection_migration_test.go:12: Step 2/2 error: Error running post-apply non-refresh plan: exit status 1
2026-09-29T15:24:49.0298155Z         
2026-09-29T15:24:49.0298501Z         Error: error fetching resource
2026-09-29T15:24:49.0298792Z         
2026-09-29T15:24:49.0299159Z           with data.mongodbatlas_stream_connection.test,
2026-09-29T15:24:49.0299832Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2026-09-29T15:24:49.0300396Z           12: data "mongodbatlas_stream_connection" "test" {
2026-09-29T15:24:49.0300723Z         
2026-09-29T15:24:49.0301541Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abbc0e41d8c0f7732567b51/streams/test-acc-tf-s-7247081934929538434/connections/kafka-conn-plaintext-mig
2026-09-29T15:24:49.0302424Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-09-29T15:24:49.0303020Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-09-29T15:24:49.0303436Z         BadRequestDetail: 
2026-09-29T15:24:49.0303782Z --- FAIL: TestMigStreamRSStreamConnection_kafkaPlaintext (12.72s)
```

  - PASS 13 seconds
- 2026-09-30
  - PASS 16 seconds
  - PASS 12 seconds
  - PASS 14 seconds
- 2026-10-01: MISSING
- 2026-10-02 PASS 14 seconds

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 10 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 12 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 11 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 14 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 13 seconds
- 2026-09-28: MISSING
- 2026-09-29 PASS 17 seconds
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
