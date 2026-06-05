# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveTenantFlex Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-28 01:01](#error-2026-05-28t0101060000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.08s
[2026-06-02 01:11](#error-2026-06-02t0111190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 6 seconds
- 2026-05-08 PASS a moment
- 2026-05-09 PASS 5 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12 PASS 5 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS a moment
- 2026-05-15 PASS 6 seconds
- 2026-05-16 PASS 5 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS a moment
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 6 seconds
- 2026-05-21 PASS 5 seconds
- 2026-05-22 PASS a moment
- 2026-05-23 PASS 5 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 6 seconds
- 2026-05-26 PASS 4 seconds
- 2026-05-27 PASS a moment
- 2026-05-28

### Error 2026-05-28T01:01:06+00:00
```
2026-05-28T01:01:06.0909642Z === RUN   TestAccAdvancedCluster_effectiveTenantFlex
2026-05-28T01:01:07.8524622Z     shared_resource.go:160: 
2026-05-28T01:01:07.8526281Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:07.8529186Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:07.8531034Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:07.8532836Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:07.8535061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:07.8537012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:77
2026-05-28T01:01:07.8538145Z         	Error:      	Received unexpected error:
2026-05-28T01:01:07.8541191Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:07.8542650Z         	Test:       	TestAccAdvancedCluster_effectiveTenantFlex
2026-05-28T01:01:07.8545202Z         	Messages:   	Project creation failed: test-acc-tf-p-3791649467328732179, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:07.8546789Z --- FAIL: TestAccAdvancedCluster_effectiveTenantFlex (1.76s)
```

- 2026-05-29 PASS a moment
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS a moment
- 2026-06-02

### Error 2026-06-02T01:11:19+00:00
```
2026-06-02T01:11:19.5215554Z === RUN   TestAccAdvancedCluster_effectiveTenantFlex
2026-06-02T01:12:21.3289020Z     shared_resource.go:160: 
2026-06-02T01:12:21.3292272Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:12:21.3296110Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-06-02T01:12:21.3299912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-06-02T01:12:21.3302919Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-06-02T01:12:21.3304787Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-06-02T01:12:21.3306759Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:77
2026-06-02T01:12:21.3307597Z         	Error:      	Received unexpected error:
2026-06-02T01:12:21.3309596Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:21.3310985Z         	Test:       	TestAccAdvancedCluster_effectiveTenantFlex
2026-06-02T01:12:21.3313175Z         	Messages:   	Project creation failed: test-acc-tf-p-8525319579390511782, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:21.3314980Z --- FAIL: TestAccAdvancedCluster_effectiveTenantFlex (61.81s)
```

- 2026-06-03 PASS 7 seconds
- 2026-06-04 PASS 5 seconds
- 2026-06-05 PASS a second

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 6 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a second
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
