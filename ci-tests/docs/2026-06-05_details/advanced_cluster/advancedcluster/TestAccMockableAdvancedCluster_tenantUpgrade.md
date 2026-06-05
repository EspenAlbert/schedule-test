# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_tenantUpgrade Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-28 01:01](#error-2026-05-28t0101230000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.03s
[2026-05-30 01:06](#error-2026-05-30t0106390000) |  | dev | flaky_500 | 73.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 53 minutes
- 2026-05-08 PASS 38 minutes
- 2026-05-09 PASS 30 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 31 minutes
- 2026-05-12 PASS 26 minutes
- 2026-05-13 PASS 29 minutes
- 2026-05-14 PASS 59 minutes
- 2026-05-15 PASS 29 minutes
- 2026-05-16 PASS 20 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19 PASS 22 minutes
- 2026-05-20 PASS 35 minutes
- 2026-05-21 PASS 35 minutes
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 31 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 39 minutes
- 2026-05-26 PASS 24 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:01:23+00:00
```
2026-05-28T01:01:23.1271866Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-05-28T01:01:24.4252918Z     shared_resource.go:160: 
2026-05-28T01:01:24.4254004Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:24.4255854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:24.4257977Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:24.4260403Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:24.4262336Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:53
2026-05-28T01:01:24.4263564Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:01:24.4264119Z         	Error:      	Received unexpected error:
2026-05-28T01:01:24.4266971Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:24.4269146Z         	Test:       	TestAccMockableAdvancedCluster_tenantUpgrade
2026-05-28T01:01:24.4271531Z         	Messages:   	Project creation failed: test-acc-tf-p-8991671862168232039, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:24.4273062Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (1.30s)
```

- 2026-05-29 PASS 30 minutes
- 2026-05-30

### Error 2026-05-30T01:06:39+00:00
```
2026-05-30T01:06:39.1064191Z === RUN   TestAccMockableAdvancedCluster_tenantUpgrade
2026-05-30T01:07:52.1495434Z     shared_resource.go:160: 
2026-05-30T01:07:52.1497183Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:07:52.1499717Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-30T01:07:52.1502664Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-30T01:07:52.1505250Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-30T01:07:52.1507290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:53
2026-05-30T01:07:52.1508812Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:07:52.1509486Z         	Error:      	Received unexpected error:
2026-05-30T01:07:52.1510570Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-30T01:07:52.1511387Z         	Test:       	TestAccMockableAdvancedCluster_tenantUpgrade
2026-05-30T01:07:52.1512876Z         	Messages:   	Project creation failed: test-acc-tf-p-5296488111184177512, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-30T01:07:52.1513819Z --- FAIL: TestAccMockableAdvancedCluster_tenantUpgrade (73.04s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 21 minutes
- 2026-06-03 PASS 55 minutes
- 2026-06-04 PASS an hour
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
- 2026-05-31 PASS 25 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
