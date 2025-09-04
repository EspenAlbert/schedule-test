# stream/streaminstance/TestAccStreamDSStreamInstance_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:52](#error-2025-08-24t0052470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d369bbb8c4ee1f82e30/streams | qa | flaky_500 | 33.03s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 6 seconds
- 2025-08-07
  - PASS 27 seconds
  - PASS 8 seconds
- 2025-08-08 PASS 5 seconds
- 2025-08-09 PASS 4 seconds
- 2025-08-10 PASS 7 seconds
- 2025-08-11 PASS 4 seconds
- 2025-08-12
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-08-13 PASS 5 seconds
- 2025-08-14 PASS 5 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 6 seconds
- 2025-08-17 PASS 4 seconds
- 2025-08-18
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 4 seconds
- 2025-08-21 PASS 5 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23 PASS 4 seconds
- 2025-08-24

### Error 2025-08-24T00:52:47+00:00
```
2025-08-24T00:52:47.5539820Z === RUN   TestAccStreamDSStreamInstance_basic
2025-08-24T00:52:47.5540627Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-3447475698285668721
2025-08-24T00:52:47.5545393Z === CONT  TestAccStreamDSStreamInstance_basic
2025-08-24T00:52:47.5580615Z === NAME  TestAccStreamDSStreamInstance_basic
2025-08-24T00:52:47.5581306Z     data_source_stream_instance_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-08-24T00:52:47.5581836Z         
2025-08-24T00:52:47.5582153Z         Error: error creating resource
2025-08-24T00:52:47.5582457Z         
2025-08-24T00:52:47.5582924Z           with mongodbatlas_stream_instance.test,
2025-08-24T00:52:47.5583823Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-08-24T00:52:47.5584555Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-08-24T00:52:47.5584878Z         
2025-08-24T00:52:47.5585540Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d369bbb8c4ee1f82e30/streams
2025-08-24T00:52:47.5586384Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:52:47.5587119Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:52:47.5587644Z         BadRequestDetail: 
2025-08-24T00:52:47.5588485Z --- FAIL: TestAccStreamDSStreamInstance_basic (33.26s)
```

- 2025-08-25 PASS 5 seconds
- 2025-08-26 PASS 5 seconds
- 2025-08-27 PASS 6 seconds
- 2025-08-28 PASS 6 seconds
- 2025-08-29
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-08-30 PASS 7 seconds
- 2025-08-31 PASS 5 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8699789Z === RUN   TestAccStreamDSStreamInstance_basic
2025-09-01T00:30:38.8700825Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-8108630987654311419
2025-09-01T00:30:38.8701732Z     data_source_stream_instance_test.go:14: 
2025-09-01T00:30:38.8703331Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8710134Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8714392Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instance_test.go:14
2025-09-01T00:30:38.8715870Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8720872Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8723179Z         	Test:       	TestAccStreamDSStreamInstance_basic
2025-09-01T00:30:38.8727405Z         	Messages:   	Project creation failed: test-acc-tf-p-8108630987654311419, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8729994Z --- FAIL: TestAccStreamDSStreamInstance_basic (0.31s)
```

  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-09-02 PASS 6 seconds
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 5 seconds