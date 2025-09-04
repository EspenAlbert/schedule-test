# stream/streaminstance/TestMigStreamRSStreamInstance_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 5 seconds
- 2025-08-07
  - PASS 21 seconds
  - PASS 7 seconds
- 2025-08-08 PASS 5 seconds
- 2025-08-09 PASS 4 seconds
- 2025-08-10 PASS 6 seconds
- 2025-08-11 PASS 5 seconds
- 2025-08-12
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-08-13 PASS 5 seconds
- 2025-08-14 PASS 5 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 5 seconds
- 2025-08-17 PASS 22 seconds
- 2025-08-18
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-08-19 PASS 6 seconds
- 2025-08-20
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-08-21 PASS 6 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23 PASS 5 seconds
- 2025-08-24 PASS 5 seconds
- 2025-08-25 PASS 6 seconds
- 2025-08-26 PASS 4 seconds
- 2025-08-27 PASS 6 seconds
- 2025-08-28 PASS 5 seconds
- 2025-08-29
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-08-30 PASS 6 seconds
- 2025-08-31 PASS 5 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8815135Z === RUN   TestMigStreamRSStreamInstance_basic
2025-09-01T00:30:38.8816276Z     resource_stream_instance_migration_test.go:15: Creating execution project: test-acc-tf-p-3473602951659650126
2025-09-01T00:30:38.8817471Z     resource_stream_instance_migration_test.go:15: 
2025-09-01T00:30:38.8819223Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8822467Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8826215Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_migration_test.go:15
2025-09-01T00:30:38.8827901Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8832855Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8835124Z         	Test:       	TestMigStreamRSStreamInstance_basic
2025-09-01T00:30:38.8869456Z         	Messages:   	Project creation failed: test-acc-tf-p-3473602951659650126, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8872029Z --- FAIL: TestMigStreamRSStreamInstance_basic (0.15s)
```

  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-09-02 PASS 6 seconds
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 5 seconds