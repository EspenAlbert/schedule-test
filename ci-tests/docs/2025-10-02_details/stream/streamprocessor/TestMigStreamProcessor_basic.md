# stream/streamprocessor/TestMigStreamProcessor_basic Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 44) FAIL(x 3)
Success rate: 93.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/connections/sample_stream_solar | qa |  | 34.02s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams | qa | flaky_500 | 32.01s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams | qa | flaky_500 | 32.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds
- 2025-09-05 PASS 13 seconds
- 2025-09-06 PASS 10 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2430310Z === RUN   TestMigStreamProcessor_basic
2025-09-07T01:03:05.2431504Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-8236421589545654763
2025-09-07T01:03:05.2432645Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-8008636377946794826
2025-09-07T01:03:05.2819836Z === CONT  TestMigStreamProcessor_basic
2025-09-07T01:03:05.2905307Z === NAME  TestMigStreamProcessor_basic
2025-09-07T01:03:05.2905936Z     resource_migration_test.go:11: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-09-07T01:03:05.2906349Z         
2025-09-07T01:03:05.2906744Z         Error: error fetching resource
2025-09-07T01:03:05.2907017Z         
2025-09-07T01:03:05.2907382Z           with data.mongodbatlas_stream_connection.sample,
2025-09-07T01:03:05.2908031Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-09-07T01:03:05.2908644Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-09-07T01:03:05.2908958Z         
2025-09-07T01:03:05.2909823Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/connections/sample_stream_solar
2025-09-07T01:03:05.2910727Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-09-07T01:03:05.2911334Z         Detail: Stream connection with name sample_stream_solar for project
2025-09-07T01:03:05.2911933Z         68bcd1d68704811492b53e30 and name test-acc-tf-s-8008636377946794826 not
2025-09-07T01:03:05.2912474Z         found. Reason: Not Found. Params: [sample_stream_solar
2025-09-07T01:03:05.2912993Z         68bcd1d68704811492b53e30 test-acc-tf-s-8008636377946794826],
2025-09-07T01:03:05.2913381Z         BadRequestDetail: 
2025-09-07T01:03:05.2913668Z --- FAIL: TestMigStreamProcessor_basic (34.22s)
```

- 2025-09-08
  - PASS 13 seconds
  - PASS 58 seconds
  - PASS 9 seconds
- 2025-09-09 PASS 10 seconds
- 2025-09-10 PASS 13 seconds
- 2025-09-11 PASS 14 seconds
- 2025-09-12
  - PASS 15 seconds
  - PASS 9 seconds
- 2025-09-13 PASS 13 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8175719Z === RUN   TestMigStreamProcessor_basic
2025-09-14T00:45:38.8176278Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-2828473103516438395
2025-09-14T00:45:38.8176997Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-840900351291093345
2025-09-14T00:45:38.8177503Z     resource_migration_test.go:11: 
2025-09-14T00:45:38.8178518Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:104
2025-09-14T00:45:38.8180231Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:174
2025-09-14T00:45:38.8182024Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:49
2025-09-14T00:45:38.8183946Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_migration_test.go:11
2025-09-14T00:45:38.8184766Z         	Error:      	Received unexpected error:
2025-09-14T00:45:38.8186826Z         	            	https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-14T00:45:38.8187881Z         	Test:       	TestMigStreamProcessor_basic
2025-09-14T00:45:38.8189810Z         	Messages:   	Stream instance creation failed: test-acc-tf-s-840900351291093345, err: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-14T00:45:38.8191209Z --- FAIL: TestMigStreamProcessor_basic (32.12s)
```

- 2025-09-15
  - PASS 10 seconds
  - PASS 13 seconds
  - FAIL 32 seconds

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0380719Z === RUN   TestMigStreamProcessor_basic
2025-09-15T06:36:28.0381274Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-4589161799912479627
2025-09-15T06:36:28.0382004Z     resource_migration_test.go:11: Creating execution stream instance: test-acc-tf-s-571760720051378464
2025-09-15T06:36:28.0382525Z     resource_migration_test.go:11: 
2025-09-15T06:36:28.0383437Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:104
2025-09-15T06:36:28.0385187Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:174
2025-09-15T06:36:28.0387290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:49
2025-09-15T06:36:28.0389265Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_migration_test.go:11
2025-09-15T06:36:28.0390079Z         	Error:      	Received unexpected error:
2025-09-15T06:36:28.0392212Z         	            	https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-15T06:36:28.0393292Z         	Test:       	TestMigStreamProcessor_basic
2025-09-15T06:36:28.0395176Z         	Messages:   	Stream instance creation failed: test-acc-tf-s-571760720051378464, err: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-15T06:36:28.0396517Z --- FAIL: TestMigStreamProcessor_basic (32.07s)
```

- 2025-09-16 PASS 12 seconds
- 2025-09-17 PASS 13 seconds
- 2025-09-18 PASS 14 seconds
- 2025-09-19 PASS 12 seconds
- 2025-09-20 PASS 10 seconds
- 2025-09-21 PASS 11 seconds
- 2025-09-22 PASS 14 seconds
- 2025-09-23 PASS 12 seconds
- 2025-09-24 PASS 10 seconds
- 2025-09-25 PASS 13 seconds
- 2025-09-26 PASS 10 seconds
- 2025-09-27 PASS 13 seconds
- 2025-09-28 PASS 11 seconds
- 2025-09-29
  - PASS 13 seconds
  - PASS 15 seconds
- 2025-09-30
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 18 seconds
- 2025-10-01
  - PASS 15 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 16 seconds
  - PASS 10 seconds
  - PASS 13 seconds
- 2025-10-02 PASS 11 seconds