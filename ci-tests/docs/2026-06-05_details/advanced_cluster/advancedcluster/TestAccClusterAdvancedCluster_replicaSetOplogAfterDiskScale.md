# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-26 02:08](#error-2026-05-26t0208190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.06s
[2026-05-28 01:01](#error-2026-05-28t0101250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 46 minutes
- 2026-05-08 PASS 36 minutes
- 2026-05-09 PASS 31 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 30 minutes
- 2026-05-12 PASS 31 minutes
- 2026-05-13 PASS 28 minutes
- 2026-05-14 PASS 45 minutes
- 2026-05-15 PASS 29 minutes
- 2026-05-16 PASS 22 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 46 minutes
- 2026-05-19 PASS 25 minutes
- 2026-05-20 PASS 33 minutes
- 2026-05-21 PASS 26 minutes
- 2026-05-22 PASS 55 minutes
- 2026-05-23 PASS 31 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 32 minutes
- 2026-05-26

### Error 2026-05-26T02:08:19+00:00
```
2026-05-26T02:08:19.7405308Z === RUN   TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale
2026-05-26T02:09:25.2993136Z     shared_resource.go:160: 
2026-05-26T02:09:25.2994285Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:09:25.2997512Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-26T02:09:25.2999155Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-26T02:09:25.3000552Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-26T02:09:25.3001943Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-26T02:09:25.3005855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:126
2026-05-26T02:09:25.3006491Z         	Error:      	Received unexpected error:
2026-05-26T02:09:25.3008123Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:09:25.3009039Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale
2026-05-26T02:09:25.3010439Z         	Messages:   	Project creation failed: test-acc-tf-p-7565729420642234550, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:09:25.3011439Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale (65.56s)
```

- 2026-05-27 PASS 59 minutes
- 2026-05-28

### Error 2026-05-28T01:01:25+00:00
```
2026-05-28T01:01:25.1230151Z === RUN   TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale
2026-05-28T01:01:26.4705509Z     shared_resource.go:160: 
2026-05-28T01:01:26.4707147Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:26.4709694Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:26.4711700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:26.4713623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:26.4715541Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:26.4718492Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:127
2026-05-28T01:01:26.4719352Z         	Error:      	Received unexpected error:
2026-05-28T01:01:26.4722208Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:26.4723729Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale
2026-05-28T01:01:26.4726392Z         	Messages:   	Project creation failed: test-acc-tf-p-2327874708897094923, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:26.4728112Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale (1.35s)
```

- 2026-05-29 PASS 30 minutes
- 2026-05-30 PASS 21 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 42 minutes
- 2026-06-02 PASS 22 minutes
- 2026-06-03 PASS 42 minutes
- 2026-06-04 PASS 49 minutes
- 2026-06-05 PASS 33 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 28 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 26 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 28 minutes
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
