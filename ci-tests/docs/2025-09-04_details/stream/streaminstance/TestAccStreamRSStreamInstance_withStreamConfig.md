# stream/streaminstance/TestAccStreamRSStreamInstance_withStreamConfig Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:52](#error-2025-08-24t0052470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d369bbb8c4ee1f82e30/streams/test-acc-tf-1903512360860595576 | qa | flaky_500 | 32.05s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 2 seconds
- 2025-08-07
  - PASS 13 seconds
  - PASS 3 seconds
- 2025-08-08 PASS 2 seconds
- 2025-08-09 PASS 2 seconds
- 2025-08-10 PASS 5 seconds
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
  - PASS 3 seconds
- 2025-08-21 PASS 3 seconds
- 2025-08-22 PASS 3 seconds
- 2025-08-23 PASS 2 seconds
- 2025-08-24

### Error 2025-08-24T00:52:47+00:00
```
2025-08-24T00:52:47.5544604Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-08-24T00:52:47.5546629Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-08-24T00:52:47.5636274Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-08-24T00:52:47.5637051Z     resource_stream_instance_test.go:47: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-24T00:52:47.5637574Z         
2025-08-24T00:52:47.5637905Z         Error: error during resource delete
2025-08-24T00:52:47.5638208Z         
2025-08-24T00:52:47.5638966Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d369bbb8c4ee1f82e30/streams/test-acc-tf-1903512360860595576
2025-08-24T00:52:47.5639790Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-08-24T00:52:47.5640443Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:52:47.5640888Z         BadRequestDetail: 
2025-08-24T00:52:47.5641263Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (32.47s)
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
2025-09-01T00:30:38.8930177Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-09-01T00:30:38.8931313Z     resource_stream_instance_test.go:44: Creating execution project: test-acc-tf-p-5452912167837246201
2025-09-01T00:30:38.8932265Z     resource_stream_instance_test.go:44: 
2025-09-01T00:30:38.8933939Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8937290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8940962Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:44
2025-09-01T00:30:38.8942449Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8947575Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8950006Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2025-09-01T00:30:38.8954142Z         	Messages:   	Project creation failed: test-acc-tf-p-5452912167837246201, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8987039Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (0.16s)
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