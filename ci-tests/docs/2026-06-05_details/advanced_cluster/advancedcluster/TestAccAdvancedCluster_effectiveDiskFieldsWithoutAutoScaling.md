# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 01:01](#error-2026-05-28t0101110000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 46 minutes
- 2026-05-08 PASS 37 minutes
- 2026-05-09 PASS 34 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 34 minutes
- 2026-05-12 PASS 35 minutes
- 2026-05-13 PASS 33 minutes
- 2026-05-14 PASS an hour
- 2026-05-15 PASS 34 minutes
- 2026-05-16 PASS 27 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 46 minutes
- 2026-05-19 PASS 31 minutes
- 2026-05-20 PASS 35 minutes
- 2026-05-21 PASS 28 minutes
- 2026-05-22 PASS 55 minutes
- 2026-05-23 PASS 35 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 33 minutes
- 2026-05-26 PASS 29 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:01:11+00:00
```
2026-05-28T01:01:11.0734779Z === RUN   TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-05-28T01:01:11.7253114Z     shared_resource.go:160: 
2026-05-28T01:01:11.7254994Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:11.7256858Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:11.7258964Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:11.7260762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:11.7262574Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:11.7264551Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-28T01:01:11.7266598Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:168
2026-05-28T01:01:11.7267447Z         	Error:      	Received unexpected error:
2026-05-28T01:01:11.7270822Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:11.7272383Z         	Test:       	TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling
2026-05-28T01:01:11.7274797Z         	Messages:   	Project creation failed: test-acc-tf-p-1581700367766532274, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:11.7276425Z --- FAIL: TestAccAdvancedCluster_effectiveDiskFieldsWithoutAutoScaling (0.65s)
```

- 2026-05-29 PASS 35 minutes
- 2026-05-30 PASS 26 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 57 minutes
- 2026-06-02 PASS 27 minutes
- 2026-06-03 PASS 42 minutes
- 2026-06-04 PASS 55 minutes
- 2026-06-05 PASS 33 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 31 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 29 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 30 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 28 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
