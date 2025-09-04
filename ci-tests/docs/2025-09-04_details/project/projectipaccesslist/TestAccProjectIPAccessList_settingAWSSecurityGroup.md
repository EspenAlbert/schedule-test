# project/projectipaccesslist/TestAccProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 3 minutes
- 2025-08-07 PASS 5 minutes
- 2025-08-08 PASS 3 minutes
- 2025-08-09 PASS 4 minutes
- 2025-08-10 PASS 3 minutes
- 2025-08-11 PASS 4 minutes
- 2025-08-12
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-08-13 PASS 3 minutes
- 2025-08-14 PASS 6 minutes
- 2025-08-15 PASS 3 minutes
- 2025-08-16 PASS 4 minutes
- 2025-08-17 PASS 3 minutes
- 2025-08-18 PASS 3 minutes
- 2025-08-19 PASS 3 minutes
- 2025-08-20
  - PASS 4 minutes
  - PASS 3 minutes
- 2025-08-21 PASS 4 minutes
- 2025-08-22 PASS 3 minutes
- 2025-08-23 PASS 4 minutes
- 2025-08-24 PASS 3 minutes
- 2025-08-25 PASS 4 minutes
- 2025-08-26 PASS 3 minutes
- 2025-08-27 PASS 3 minutes
- 2025-08-28 PASS 4 minutes
- 2025-08-29 PASS 3 minutes
- 2025-08-30 PASS 3 minutes
- 2025-08-31 PASS 3 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2849577Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2025-09-01T00:34:53.2850347Z     resource_project_ip_access_list_test.go:82: Creating execution project: test-acc-tf-p-1611278918395536988
2025-09-01T00:34:53.2850919Z     resource_project_ip_access_list_test.go:82: 
2025-09-01T00:34:53.2852026Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:34:53.2853724Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:34:53.2855752Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:82
2025-09-01T00:34:53.2856597Z         	Error:      	Received unexpected error:
2025-09-01T00:34:53.2859233Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:34:53.2860662Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2025-09-01T00:34:53.2862989Z         	Messages:   	Project creation failed: test-acc-tf-p-1611278918395536988, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:34:53.2864426Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (0.12s)
```

  - PASS 4 minutes
  - PASS 7 minutes
  - PASS 5 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-09-02 PASS 4 minutes
- 2025-09-03 PASS 3 minutes
- 2025-09-04 PASS 3 minutes