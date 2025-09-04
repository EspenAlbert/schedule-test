# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:52](#error-2025-08-24t0052470000) | STREAM_PROCESSOR_TIMEOUT /api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/processor/new-processorkkc2y:start | qa |  | 35.05s
[2025-08-31 01:04](#error-2025-08-31t0104350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397810a66c308153f0015/streams/test-acc-tf-s-7317349162992961096/connections/ClusterConnectionSrc7wyjb | qa | flaky_500 | 42.05s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 11 seconds
- 2025-08-07
  - PASS 47 seconds
  - PASS 17 seconds
- 2025-08-08 PASS 13 seconds
- 2025-08-09 PASS 14 seconds
- 2025-08-10 PASS 13 seconds
- 2025-08-11 PASS 10 seconds
- 2025-08-12
  - PASS 10 seconds
  - PASS 12 seconds
- 2025-08-13 PASS 14 seconds
- 2025-08-14 PASS 14 seconds
- 2025-08-15 PASS 15 seconds
- 2025-08-16 PASS 15 seconds
- 2025-08-17 PASS 13 seconds
- 2025-08-18
  - PASS 12 seconds
  - PASS 15 seconds
- 2025-08-19 PASS 16 seconds
- 2025-08-20
  - PASS 16 seconds
  - PASS 13 seconds
- 2025-08-21 PASS 15 seconds
- 2025-08-22 PASS 16 seconds
- 2025-08-23 PASS 14 seconds
- 2025-08-24

### Error 2025-08-24T00:52:47+00:00
```
2025-08-24T00:52:47.5801147Z === RUN   TestAccStreamProcessor_clusterType
2025-08-24T00:52:47.5804607Z === CONT  TestAccStreamProcessor_clusterType
2025-08-24T00:52:47.5807481Z   diagnostic_detail=
2025-08-24T00:52:47.5809268Z    tf_proto_version=6.9
2025-08-24T00:52:47.5829558Z === NAME  TestAccStreamProcessor_clusterType
2025-08-24T00:52:47.5830085Z     resource_test.go:273: Step 1/1 error: Error running apply: exit status 1
2025-08-24T00:52:47.5830475Z         
2025-08-24T00:52:47.5831335Z         Error: Error starting stream processor. You need to fix the processor and import the resource or delete it manually and re-run terraform apply.
2025-08-24T00:52:47.5831924Z         
2025-08-24T00:52:47.5832319Z           with mongodbatlas_stream_processor.processor,
2025-08-24T00:52:47.5833059Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-08-24T00:52:47.5833973Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2025-08-24T00:52:47.5834323Z         
2025-08-24T00:52:47.5835467Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/processor/new-processorkkc2y:start
2025-08-24T00:52:47.5836442Z         POST: HTTP 504 Gateway Timeout (Error code: "STREAM_PROCESSOR_TIMEOUT")
2025-08-24T00:52:47.5837106Z         Detail: Streams Processor with this name (test-acc-tf-s-5032423642792954917)
2025-08-24T00:52:47.5837718Z         timed out while processing. Reason: Gateway Timeout. Params:
2025-08-24T00:52:47.5838371Z         [test-acc-tf-s-5032423642792954917 new-processorkkc2y], BadRequestDetail: 
2025-08-24T00:52:47.5851585Z    test_working_directory=/tmp/plugintest3628041530 test_name=TestAccStreamProcessor_clusterType test_terraform_path=/home/runner/work/_temp/d2bdc5ff-67dd-4337-933f-9f535c8e715a/terraform test_step_number=1
2025-08-24T00:52:47.5852810Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-24T00:52:47.5853446Z         
2025-08-24T00:52:47.5853794Z         Error: error deleting resource
2025-08-24T00:52:47.5854093Z         
2025-08-24T00:52:47.5855098Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/connections/ClusterConnectionSrckkc2y
2025-08-24T00:52:47.5855916Z         DELETE: HTTP 403 Forbidden (Error code:
2025-08-24T00:52:47.5856544Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-08-24T00:52:47.5857109Z         name ClusterConnectionSrckkc2y in stream instance
2025-08-24T00:52:47.5857706Z         test-acc-tf-s-5032423642792954917 has active processors, and cannot be
2025-08-24T00:52:47.5858321Z         changed. Reason: Forbidden. Params: [ClusterConnectionSrckkc2y
2025-08-24T00:52:47.5858875Z         test-acc-tf-s-5032423642792954917], BadRequestDetail: 
2025-08-24T00:52:47.5859276Z --- FAIL: TestAccStreamProcessor_clusterType (35.47s)
```

- 2025-08-25 PASS 13 seconds
- 2025-08-26 PASS 11 seconds
- 2025-08-27 PASS 17 seconds
- 2025-08-28 PASS 13 seconds
- 2025-08-29
  - PASS 14 seconds
  - PASS 14 seconds
- 2025-08-30 PASS 13 seconds
- 2025-08-31

### Error 2025-08-31T01:04:35+00:00
```
2025-08-31T01:04:35.7476046Z === RUN   TestAccStreamProcessor_clusterType
2025-08-31T01:04:35.7478686Z === CONT  TestAccStreamProcessor_clusterType
2025-08-31T01:04:35.7517723Z === NAME  TestAccStreamProcessor_clusterType
2025-08-31T01:04:35.7518758Z     resource_test.go:273: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-31T01:04:35.7519533Z         
2025-08-31T01:04:35.7520178Z         Error: error deleting resource
2025-08-31T01:04:35.7520638Z         
2025-08-31T01:04:35.7522334Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397810a66c308153f0015/streams/test-acc-tf-s-7317349162992961096/connections/ClusterConnectionSrc7wyjb
2025-08-31T01:04:35.7524013Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-08-31T01:04:35.7525090Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T01:04:35.7525811Z         BadRequestDetail: 
2025-08-31T01:04:35.7526324Z --- FAIL: TestAccStreamProcessor_clusterType (42.53s)
```

- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9767682Z === RUN   TestAccStreamProcessor_clusterType
2025-09-01T00:30:38.9768629Z     resource_test.go:266: Creating execution project: test-acc-tf-p-1277255057611770771
2025-09-01T00:30:38.9769436Z     resource_test.go:266: 
2025-09-01T00:30:38.9771065Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9774322Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9777687Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9781171Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:266
2025-09-01T00:30:38.9782581Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9787948Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9790301Z         	Test:       	TestAccStreamProcessor_clusterType
2025-09-01T00:30:38.9794412Z         	Messages:   	Project creation failed: test-acc-tf-p-1277255057611770771, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9797176Z --- FAIL: TestAccStreamProcessor_clusterType (0.18s)
```

  - PASS 13 minutes
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 15 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 15 seconds
- 2025-09-02 PASS 16 seconds
- 2025-09-03 PASS 14 seconds
- 2025-09-04 PASS 12 seconds