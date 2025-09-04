# stream/streaminstance/TestAccStreamDSStreamInstances_withPageConfig Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 2 seconds
- 2025-08-07
  - PASS 18 seconds
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
- 2025-08-21 PASS 2 seconds
- 2025-08-22 PASS 2 seconds
- 2025-08-23 PASS 2 seconds
- 2025-08-24 PASS 32 seconds
- 2025-08-25 PASS 2 seconds
- 2025-08-26 PASS 2 seconds
- 2025-08-27 PASS 3 seconds
- 2025-08-28 PASS 2 seconds
- 2025-08-29
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-08-30 PASS 2 seconds
- 2025-08-31 PASS 2 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8757871Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-09-01T00:30:38.8759002Z     data_source_stream_instances_test.go:42: Creating execution project: test-acc-tf-p-6767473172180520952
2025-09-01T00:30:38.8759962Z     data_source_stream_instances_test.go:42: 
2025-09-01T00:30:38.8761608Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8764746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8768523Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:42
2025-09-01T00:30:38.8770243Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8775289Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8807945Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2025-09-01T00:30:38.8811987Z         	Messages:   	Project creation failed: test-acc-tf-p-6767473172180520952, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8814491Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (0.18s)
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