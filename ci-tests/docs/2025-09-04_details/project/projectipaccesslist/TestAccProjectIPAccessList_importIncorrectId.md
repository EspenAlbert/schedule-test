# project/projectipaccesslist/TestAccProjectIPAccessList_importIncorrectId Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 16:20](#error-2025-09-01t1620560000) |  | dev | 11.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 13 seconds
- 2025-08-07 PASS 30 seconds
- 2025-08-08 PASS 12 seconds
- 2025-08-09 PASS 12 seconds
- 2025-08-10 PASS 2 minutes
- 2025-08-11 PASS 13 seconds
- 2025-08-12
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-08-13 PASS 11 seconds
- 2025-08-14 PASS 12 seconds
- 2025-08-15 PASS 12 seconds
- 2025-08-16 PASS 2 minutes
- 2025-08-17 PASS 12 seconds
- 2025-08-18 PASS 12 seconds
- 2025-08-19 PASS 13 seconds
- 2025-08-20
  - PASS 11 seconds
  - PASS 13 seconds
- 2025-08-21 PASS 12 seconds
- 2025-08-22 PASS 22 seconds
- 2025-08-23 PASS 11 seconds
- 2025-08-24 PASS 12 seconds
- 2025-08-25 PASS 22 seconds
- 2025-08-26 PASS 13 seconds
- 2025-08-27 PASS 22 seconds
- 2025-08-28 PASS 2 minutes
- 2025-08-29 PASS 12 seconds
- 2025-08-30 PASS 12 seconds
- 2025-08-31 PASS 2 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2879645Z === RUN   TestAccProjectIPAccessList_importIncorrectId
2025-09-01T00:34:53.2880273Z     resource_project_ip_access_list_test.go:159: Creating execution project: test-acc-tf-p-38302513539270741
2025-09-01T00:34:53.2881140Z     resource_project_ip_access_list_test.go:159: 
2025-09-01T00:34:53.2882343Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:34:53.2884465Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:34:53.2886872Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:159
2025-09-01T00:34:53.2887856Z         	Error:      	Received unexpected error:
2025-09-01T00:34:53.2891161Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:34:53.2892749Z         	Test:       	TestAccProjectIPAccessList_importIncorrectId
2025-09-01T00:34:53.2895462Z         	Messages:   	Project creation failed: test-acc-tf-p-38302513539270741, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:34:53.2897129Z --- FAIL: TestAccProjectIPAccessList_importIncorrectId (0.10s)
```

  - PASS 12 seconds
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 2 minutes
  - FAIL 11 seconds

### Error 2025-09-01T16:20:56+00:00
```
2025-09-01T16:20:56.8512575Z === RUN   TestAccProjectIPAccessList_importIncorrectId
2025-09-01T16:20:56.8515233Z === CONT  TestAccProjectIPAccessList_importIncorrectId
2025-09-01T16:20:56.8561880Z === NAME  TestAccProjectIPAccessList_importIncorrectId
2025-09-01T16:20:56.8563068Z     resource_project_ip_access_list_test.go:164: Step 1/2 error: Error running post-apply non-refresh plan: exit status 1
2025-09-01T16:20:56.8563896Z         
2025-09-01T16:20:56.8564407Z         Error: error getting access list entry
2025-09-01T16:20:56.8564872Z         
2025-09-01T16:20:56.8565517Z           with data.mongodbatlas_project_ip_access_list.test,
2025-09-01T16:20:56.8566690Z           on terraform_plugin_test.tf line 18, in data "mongodbatlas_project_ip_access_list" "test":
2025-09-01T16:20:56.8567738Z           18: 		data "mongodbatlas_project_ip_access_list" "test" {
2025-09-01T16:20:56.8568410Z         
2025-09-01T16:20:56.8569641Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5c58f2fc5f0455fbb5be5/accessList/179.154.226.68
2025-09-01T16:20:56.8570652Z         GET: HTTP 404 Not Found (Error code:
2025-09-01T16:20:56.8571582Z         "ATLAS_NETWORK_PERMISSION_ENTRY_NOT_FOUND") Detail: IP Address 179.154.226.68
2025-09-01T16:20:56.8572656Z         not on Atlas access list for group 68b5c58f2fc5f0455fbb5be5. Reason: Not
2025-09-01T16:20:56.8573717Z         Found. Params: [179.154.226.68 68b5c58f2fc5f0455fbb5be5], BadRequestDetail: 
2025-09-01T16:20:56.8575235Z --- FAIL: TestAccProjectIPAccessList_importIncorrectId (11.54s)
```

- 2025-09-02 PASS 13 seconds
- 2025-09-03 PASS 2 minutes
- 2025-09-04 PASS 11 seconds