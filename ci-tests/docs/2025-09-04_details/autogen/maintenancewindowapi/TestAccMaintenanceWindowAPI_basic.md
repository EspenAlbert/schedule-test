# autogen/maintenancewindowapi/TestAccMaintenanceWindowAPI_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:32](#error-2025-09-01t0032130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 11 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 7 seconds
- 2025-08-09 PASS 7 seconds
- 2025-08-10 PASS 6 seconds
- 2025-08-11 PASS 9 seconds
- 2025-08-12 PASS 7 seconds
- 2025-08-13 PASS 9 seconds
- 2025-08-14 PASS 7 seconds
- 2025-08-15 PASS 6 seconds
- 2025-08-16 PASS 10 seconds
- 2025-08-17 PASS 6 seconds
- 2025-08-18 PASS 6 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-08-21 PASS 7 seconds
- 2025-08-22 PASS 6 seconds
- 2025-08-23 PASS 8 seconds
- 2025-08-24 PASS 6 seconds
- 2025-08-25 PASS 9 seconds
- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 8 seconds
- 2025-08-28 PASS 7 seconds
- 2025-08-29 PASS 7 seconds
- 2025-08-30 PASS 9 seconds
- 2025-08-31 PASS 7 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:32:13+00:00
```
2025-09-01T00:32:13.2898886Z === RUN   TestAccMaintenanceWindowAPI_basic
2025-09-01T00:32:13.2899752Z     resource_test.go:17: Creating execution project: test-acc-tf-p-4797083367063398978
2025-09-01T00:32:13.2900482Z     resource_test.go:17: 
2025-09-01T00:32:13.2902154Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:32:13.2905147Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:32:13.2908596Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2025-09-01T00:32:13.2910139Z         	Error:      	Received unexpected error:
2025-09-01T00:32:13.2914887Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:32:13.2917384Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2025-09-01T00:32:13.2921333Z         	Messages:   	Project creation failed: test-acc-tf-p-4797083367063398978, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:32:13.2923747Z --- FAIL: TestAccMaintenanceWindowAPI_basic (0.14s)
```

  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 9 seconds