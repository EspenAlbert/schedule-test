# config/databaseuser/TestAccDatabaseUser_withLabelsAndDescription Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 14 seconds
  - PASS 13 seconds
- 2026-05-08 PASS 30 seconds
- 2026-05-09 PASS 23 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 28 seconds
- 2026-05-12 PASS 16 seconds
- 2026-05-13 PASS 25 seconds
- 2026-05-14 PASS 13 seconds
- 2026-05-15 PASS 23 seconds
- 2026-05-16 PASS 12 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 23 seconds
- 2026-05-19 PASS 24 seconds
- 2026-05-20 PASS 27 seconds
- 2026-05-21 PASS 13 seconds
- 2026-05-22 PASS 24 seconds
- 2026-05-23 PASS 11 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 21 seconds
- 2026-05-26 PASS 14 seconds
- 2026-05-27 PASS 33 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6159559Z === RUN   TestAccDatabaseUser_withLabelsAndDescription
2026-05-28T01:02:57.6160212Z     resource_database_user_test.go:186: Creating execution project (1): test-acc-tf-p-6889174241563480651
2026-05-28T01:02:57.6160777Z     resource_database_user_test.go:186: 
2026-05-28T01:02:57.6161817Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:57.6163591Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:02:57.6165366Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:02:57.6167325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/databaseuser/resource_database_user_test.go:186
2026-05-28T01:02:57.6168294Z         	Error:      	Received unexpected error:
2026-05-28T01:02:57.6171427Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6172878Z         	Test:       	TestAccDatabaseUser_withLabelsAndDescription
2026-05-28T01:02:57.6175234Z         	Messages:   	Project creation failed: test-acc-tf-p-6889174241563480651, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6176812Z --- FAIL: TestAccDatabaseUser_withLabelsAndDescription (0.63s)
```

- 2026-05-29 PASS 32 seconds
- 2026-05-30 PASS 15 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 30 seconds
- 2026-06-02 PASS 24 seconds
- 2026-06-03 PASS 34 seconds
- 2026-06-04 PASS 14 seconds
- 2026-06-05 PASS 15 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 31 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 32 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 33 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 32 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
