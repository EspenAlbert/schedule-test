# stream/streaminstance/TestMigStreamRSStreamInstance_basic Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 44) FAIL(x 3)
Success rate: 93.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:50](#error-2025-09-07t0050490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1d58704811492b53c49/streams/test-acc-tf-6003017670855865224 | qa | flaky_500 | 35.02s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c43d444485797b214ef/streams | qa | flaky_500 | 32.05s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04bfe60767b7f9b139e/streams | qa | flaky_500 | 32.00s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 5 seconds
- 2025-09-05 PASS 6 seconds
- 2025-09-06 PASS 5 seconds
- 2025-09-07

### Error 2025-09-07T00:50:49+00:00
```
2025-09-07T00:50:49.0250576Z === RUN   TestMigStreamRSStreamInstance_basic
2025-09-07T00:50:49.0253000Z === CONT  TestMigStreamRSStreamInstance_basic
2025-09-07T00:50:49.0317199Z === NAME  TestMigStreamRSStreamInstance_basic
2025-09-07T00:50:49.0317912Z     resource_stream_instance_migration_test.go:21: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-07T00:50:49.0318442Z         
2025-09-07T00:50:49.0318732Z         Error: error during resource delete
2025-09-07T00:50:49.0319010Z         
2025-09-07T00:50:49.0319685Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d58704811492b53c49/streams/test-acc-tf-6003017670855865224
2025-09-07T00:50:49.0320447Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-09-07T00:50:49.0321043Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:50:49.0321453Z         BadRequestDetail: 
2025-09-07T00:50:49.0321757Z --- FAIL: TestMigStreamRSStreamInstance_basic (35.18s)
```

- 2025-09-08
  - PASS 8 seconds
  - PASS 55 seconds
  - PASS 4 seconds
- 2025-09-09 PASS 5 seconds
- 2025-09-10 PASS 6 seconds
- 2025-09-11 PASS 6 seconds
- 2025-09-12
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-09-13 PASS 6 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8063990Z === RUN   TestMigStreamRSStreamInstance_basic
2025-09-14T00:45:38.8066381Z === CONT  TestMigStreamRSStreamInstance_basic
2025-09-14T00:45:38.8167594Z === NAME  TestMigStreamRSStreamInstance_basic
2025-09-14T00:45:38.8168275Z     resource_stream_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8168841Z         
2025-09-14T00:45:38.8169105Z         Error: error creating resource
2025-09-14T00:45:38.8169369Z         
2025-09-14T00:45:38.8169679Z           with mongodbatlas_stream_instance.test,
2025-09-14T00:45:38.8170457Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_stream_instance" "test":
2025-09-14T00:45:38.8171035Z           14: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-14T00:45:38.8171342Z         
2025-09-14T00:45:38.8171826Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ef/streams
2025-09-14T00:45:38.8172490Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:45:38.8173238Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:45:38.8173619Z         BadRequestDetail: 
2025-09-14T00:45:38.8173918Z --- FAIL: TestMigStreamRSStreamInstance_basic (32.50s)
```

- 2025-09-15
  - PASS 5 seconds
  - PASS 6 seconds
  - FAIL 32 seconds

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0272715Z === RUN   TestMigStreamRSStreamInstance_basic
2025-09-15T06:36:28.0275372Z === CONT  TestMigStreamRSStreamInstance_basic
2025-09-15T06:36:28.0372455Z === NAME  TestMigStreamRSStreamInstance_basic
2025-09-15T06:36:28.0373053Z     resource_stream_instance_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0373509Z         
2025-09-15T06:36:28.0373790Z         Error: error creating resource
2025-09-15T06:36:28.0374066Z         
2025-09-15T06:36:28.0374393Z           with mongodbatlas_stream_instance.test,
2025-09-15T06:36:28.0375178Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_stream_instance" "test":
2025-09-15T06:36:28.0375905Z           14: 		resource "mongodbatlas_stream_instance" "test" {
2025-09-15T06:36:28.0376218Z         
2025-09-15T06:36:28.0376726Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139e/streams
2025-09-15T06:36:28.0377566Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:36:28.0378151Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:36:28.0378548Z         BadRequestDetail: 
2025-09-15T06:36:28.0378861Z --- FAIL: TestMigStreamRSStreamInstance_basic (32.00s)
```

- 2025-09-16 PASS 6 seconds
- 2025-09-17 PASS 6 seconds
- 2025-09-18 PASS 6 seconds
- 2025-09-19 PASS 6 seconds
- 2025-09-20 PASS 5 seconds
- 2025-09-21 PASS 5 seconds
- 2025-09-22 PASS 6 seconds
- 2025-09-23 PASS 5 seconds
- 2025-09-24 PASS 5 seconds
- 2025-09-25 PASS 6 seconds
- 2025-09-26 PASS 5 seconds
- 2025-09-27 PASS 6 seconds
- 2025-09-28 PASS 6 seconds
- 2025-09-29
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-09-30
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-10-01
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-10-02 PASS 5 seconds