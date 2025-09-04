# config/databaseuser/TestAccConfigDSDatabaseUsers_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 05:59](#error-2025-09-01t0559570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 6 seconds
- 2025-08-07 PASS 22 seconds
- 2025-08-08 PASS 6 seconds
- 2025-08-09 PASS 5 seconds
- 2025-08-10 PASS 5 seconds
- 2025-08-11 PASS 5 seconds
- 2025-08-12 PASS 6 seconds
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS 7 seconds
- 2025-08-15 PASS 8 seconds
- 2025-08-16 PASS 4 seconds
- 2025-08-17 PASS 4 seconds
- 2025-08-18 PASS 6 seconds
- 2025-08-19 PASS 5 seconds
- 2025-08-20
  - PASS 4 seconds
  - PASS 8 seconds
- 2025-08-21 PASS 5 seconds
- 2025-08-22 PASS 6 seconds
- 2025-08-23 PASS 6 seconds
- 2025-08-24 PASS 3 seconds
- 2025-08-25 PASS 5 seconds
- 2025-08-26 PASS 8 seconds
- 2025-08-27 PASS 10 seconds
- 2025-08-28 PASS 7 seconds
- 2025-08-29 PASS 5 seconds
- 2025-08-30 PASS 5 seconds
- 2025-08-31 PASS 4 seconds
- 2025-09-01
  - PASS 6 seconds
  - FAIL a moment

### Error 2025-09-01T05:59:57+00:00
```
2025-09-01T05:59:57.8451144Z === RUN   TestAccConfigDSDatabaseUsers_basic
2025-09-01T05:59:57.8452091Z     data_source_database_users_test.go:13: Creating execution project: test-acc-tf-p-6246267844288773151
2025-09-01T05:59:57.8452908Z     data_source_database_users_test.go:13: 
2025-09-01T05:59:57.8454361Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:59:57.8457364Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T05:59:57.8460486Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/data_source_database_users_test.go:13
2025-09-01T05:59:57.8461719Z         	Error:      	Received unexpected error:
2025-09-01T05:59:57.8466384Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:59:57.8468583Z         	Test:       	TestAccConfigDSDatabaseUsers_basic
2025-09-01T05:59:57.8472139Z         	Messages:   	Project creation failed: test-acc-tf-p-6246267844288773151, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:59:57.8474340Z --- FAIL: TestAccConfigDSDatabaseUsers_basic (0.17s)
```

  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 4 seconds
- 2025-09-03 PASS 6 seconds
- 2025-09-04 PASS 4 seconds