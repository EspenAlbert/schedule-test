# stream/streamaccountdetails/TestAccStreamAccountDetailsDS_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 15 minutes
- 2025-08-07
  - PASS 20 minutes
  - PASS 11 minutes
- 2025-08-08 PASS 14 minutes
- 2025-08-09 PASS 19 minutes
- 2025-08-10 PASS 24 minutes
- 2025-08-11 PASS 42 minutes
- 2025-08-12
  - PASS 17 minutes
  - PASS 12 minutes
- 2025-08-13 PASS 18 minutes
- 2025-08-14 PASS 17 minutes
- 2025-08-15 PASS 12 minutes
- 2025-08-16 PASS 41 minutes
- 2025-08-17 PASS 30 minutes
- 2025-08-18
  - PASS 16 minutes
  - PASS 12 minutes
- 2025-08-19 PASS 18 minutes
- 2025-08-20
  - PASS 15 minutes
  - PASS 18 minutes
- 2025-08-21 PASS 13 minutes
- 2025-08-22 PASS 13 minutes
- 2025-08-23 PASS 20 minutes
- 2025-08-24 PASS 16 minutes
- 2025-08-25 PASS 27 minutes
- 2025-08-26 PASS 21 minutes
- 2025-08-27 PASS 23 minutes
- 2025-08-28 PASS 14 minutes
- 2025-08-29
  - PASS 24 minutes
  - PASS 14 minutes
- 2025-08-30 PASS 15 minutes
- 2025-08-31 PASS 19 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:18+00:00
```
2025-09-01T00:30:18.6000311Z === RUN   TestAccStreamAccountDetailsDS_basic
2025-09-01T00:30:18.6001784Z     data_source_test.go:19: Creating execution project: test-acc-tf-p-3978522630217316034
2025-09-01T00:30:18.6002761Z     data_source_test.go:19: 
2025-09-01T00:30:18.6004287Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:18.6008026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:18.6011388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-09-01T00:30:18.6015021Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamaccountdetails/data_source_test.go:19
2025-09-01T00:30:18.6016750Z         	Error:      	Received unexpected error:
2025-09-01T00:30:18.6021684Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:18.6024251Z         	Test:       	TestAccStreamAccountDetailsDS_basic
2025-09-01T00:30:18.6028562Z         	Messages:   	Project creation failed: test-acc-tf-p-3978522630217316034, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:18.6031117Z --- FAIL: TestAccStreamAccountDetailsDS_basic (0.39s)
```

  - PASS an hour
  - PASS an hour
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 15 minutes
- 2025-09-02 PASS 17 minutes
- 2025-09-03 PASS 30 minutes
- 2025-09-04 PASS 19 minutes