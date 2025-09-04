# stream/streaminstance/TestAccStreamDSStreamInstances_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:52](#error-2025-08-24t0052470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d369bbb8c4ee1f82e30/streams | qa | flaky_500 | 31.00s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 2 seconds
- 2025-08-07
  - PASS 14 seconds
  - PASS 3 seconds
- 2025-08-08 PASS 2 seconds
- 2025-08-09 PASS 2 seconds
- 2025-08-10 PASS 6 seconds
- 2025-08-11 PASS 2 seconds
- 2025-08-12
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-08-13 PASS 2 seconds
- 2025-08-14 PASS 2 seconds
- 2025-08-15 PASS 2 seconds
- 2025-08-16 PASS 2 seconds
- 2025-08-17 PASS 2 seconds
- 2025-08-18
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-08-19 PASS 3 seconds
- 2025-08-20
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-08-21 PASS 3 seconds
- 2025-08-22 PASS 3 seconds
- 2025-08-23 PASS 2 seconds
- 2025-08-24

### Error 2025-08-24T00:52:47+00:00
```
2025-08-24T00:52:47.5541500Z === RUN   TestAccStreamDSStreamInstances_basic
2025-08-24T00:52:47.5547332Z === CONT  TestAccStreamDSStreamInstances_basic
2025-08-24T00:52:47.5560397Z === NAME  TestAccStreamDSStreamInstances_basic
2025-08-24T00:52:47.5561000Z     data_source_stream_instances_test.go:26: Step 1/1 error: Error running apply: exit status 1
2025-08-24T00:52:47.5561447Z         
2025-08-24T00:52:47.5561769Z         Error: error creating resource
2025-08-24T00:52:47.5562059Z         
2025-08-24T00:52:47.5562554Z           with mongodbatlas_stream_instance.test,
2025-08-24T00:52:47.5563514Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-08-24T00:52:47.5564428Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-08-24T00:52:47.5564869Z         
2025-08-24T00:52:47.5565427Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d369bbb8c4ee1f82e30/streams
2025-08-24T00:52:47.5566249Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:52:47.5566977Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:52:47.5567492Z         BadRequestDetail: 
2025-08-24T00:52:47.5580248Z    test_working_directory=/tmp/plugintest2517416142
2025-08-24T00:52:47.5587981Z --- FAIL: TestAccStreamDSStreamInstances_basic (31.02s)
```

- 2025-08-25 PASS 2 seconds
- 2025-08-26 PASS 2 seconds
- 2025-08-27 PASS 3 seconds
- 2025-08-28 PASS 2 seconds
- 2025-08-29
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-08-30 PASS 3 seconds
- 2025-08-31 PASS 2 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8730607Z === RUN   TestAccStreamDSStreamInstances_basic
2025-09-01T00:30:38.8731686Z     data_source_stream_instances_test.go:15: Creating execution project: test-acc-tf-p-4673923539621708246
2025-09-01T00:30:38.8732652Z     data_source_stream_instances_test.go:15: 
2025-09-01T00:30:38.8734327Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8737636Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8741430Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:15
2025-09-01T00:30:38.8742977Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8748030Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8750274Z         	Test:       	TestAccStreamDSStreamInstances_basic
2025-09-01T00:30:38.8754469Z         	Messages:   	Project creation failed: test-acc-tf-p-4673923539621708246, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8757200Z --- FAIL: TestAccStreamDSStreamInstances_basic (0.17s)
```

  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-09-02 PASS 3 seconds
- 2025-09-03 PASS 2 seconds
- 2025-09-04 PASS 2 seconds