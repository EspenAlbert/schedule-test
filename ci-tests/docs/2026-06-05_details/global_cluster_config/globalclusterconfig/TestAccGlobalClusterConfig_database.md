# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_database Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-23 01:02](#error-2026-05-23t0102240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.07s
[2026-05-28 01:00](#error-2026-05-28t0100470000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 47 minutes
- 2026-05-08 PASS 35 minutes
- 2026-05-09 PASS 29 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 29 minutes
- 2026-05-12 PASS 25 minutes
- 2026-05-13 PASS 27 minutes
- 2026-05-14 PASS 43 minutes
- 2026-05-15 PASS 25 minutes
- 2026-05-16 PASS 21 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 49 minutes
- 2026-05-19 PASS 19 minutes
- 2026-05-20 PASS 34 minutes
- 2026-05-21 PASS 29 minutes
- 2026-05-22 PASS an hour
- 2026-05-23

### Error 2026-05-23T01:02:24+00:00
```
2026-05-23T01:02:24.6258483Z === RUN   TestAccGlobalClusterConfig_database
2026-05-23T01:02:24.6259127Z     resource_global_cluster_config_test.go:158: Creating execution project (1): test-acc-tf-p-283907893755354770
2026-05-23T01:04:04.2897169Z     resource_global_cluster_config_test.go:158: 
2026-05-23T01:04:04.2899392Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:04:04.2902736Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:04:04.2905610Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:04:04.2907999Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-23T01:04:04.2910941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:158
2026-05-23T01:04:04.2912257Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:04:04.2912752Z         	Error:      	Received unexpected error:
2026-05-23T01:04:04.2914675Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:04:04.2915732Z         	Test:       	TestAccGlobalClusterConfig_database
2026-05-23T01:04:04.2917483Z         	Messages:   	Project creation failed: test-acc-tf-p-283907893755354770, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:04:04.2919025Z --- FAIL: TestAccGlobalClusterConfig_database (99.67s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 30 minutes
- 2026-05-26 PASS 26 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:00:47+00:00
```
2026-05-28T01:00:47.7219313Z === RUN   TestAccGlobalClusterConfig_database
2026-05-28T01:00:47.7220173Z     resource_global_cluster_config_test.go:158: Creating execution project (1): test-acc-tf-p-6333624904944295148
2026-05-28T01:00:48.6431507Z     resource_global_cluster_config_test.go:158: 
2026-05-28T01:00:48.6432633Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:48.6434454Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:48.6436217Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:48.6438238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:00:48.6440558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:158
2026-05-28T01:00:48.6441871Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:48.6442412Z         	Error:      	Received unexpected error:
2026-05-28T01:00:48.6445191Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:00:48.6446573Z         	Test:       	TestAccGlobalClusterConfig_database
2026-05-28T01:00:48.6449063Z         	Messages:   	Project creation failed: test-acc-tf-p-6333624904944295148, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:00:48.6450698Z --- FAIL: TestAccGlobalClusterConfig_database (0.92s)
```

- 2026-05-29 PASS 35 minutes
- 2026-05-30 PASS 20 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 55 minutes
- 2026-06-02 PASS 22 minutes
- 2026-06-03 PASS 44 minutes
- 2026-06-04 PASS 51 minutes
- 2026-06-05 PASS 35 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 30 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 28 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 29 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 25 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
