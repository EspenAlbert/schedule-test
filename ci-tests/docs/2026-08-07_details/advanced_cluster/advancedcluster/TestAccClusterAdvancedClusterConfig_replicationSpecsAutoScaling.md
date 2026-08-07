# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058010000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s
[2026-07-21 00:53](#error-2026-07-21t0053070000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.10s
[2026-07-23 00:49](#error-2026-07-23t0049370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:01+00:00
```
2026-07-09T00:58:01.1074192Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-07-09T00:58:01.7821577Z     shared_resource.go:160: 
2026-07-09T00:58:01.7823238Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:01.7825962Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:01.7828281Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:01.7830616Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:01.7832923Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:01.7835227Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:419
2026-07-09T00:58:01.7836053Z         	Error:      	Received unexpected error:
2026-07-09T00:58:01.7838916Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:01.7840501Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-07-09T00:58:01.7843008Z         	Messages:   	Project creation failed: test-acc-tf-p-8012358934568248510, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:01.7845050Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (0.68s)
```

- 2026-07-10 PASS an hour
- 2026-07-11 PASS 33 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 47 minutes
- 2026-07-14 PASS 50 minutes
- 2026-07-15 PASS 41 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 56 minutes
- 2026-07-18 PASS 40 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:07+00:00
```
2026-07-21T00:53:07.9408695Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-07-21T00:53:08.9012432Z     shared_resource.go:160: 
2026-07-21T00:53:08.9013823Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:08.9015679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:08.9017479Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:08.9019250Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:08.9021239Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:08.9023595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:419
2026-07-21T00:53:08.9024429Z         	Error:      	Received unexpected error:
2026-07-21T00:53:08.9027241Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:08.9028736Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-07-21T00:53:08.9031417Z         	Messages:   	Project creation failed: test-acc-tf-p-53999194199467679, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:08.9033069Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (0.96s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:37+00:00
```
2026-07-23T00:49:37.1645689Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-07-23T00:49:37.5162750Z     shared_resource.go:160: 
2026-07-23T00:49:37.5164890Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:37.5167325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:37.5169755Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:37.5172330Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:37.5174445Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:37.5176629Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:419
2026-07-23T00:49:37.5177571Z         	Error:      	Received unexpected error:
2026-07-23T00:49:37.5180913Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:37.5182673Z         	Test:       	TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-07-23T00:49:37.5185271Z         	Messages:   	Project creation failed: test-acc-tf-p-410231318519312149, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:37.5186926Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (0.35s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 43 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 2 hours
- 2026-07-29 PASS 45 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 35 minutes
  - PASS 34 minutes
- 2026-08-01 PASS 31 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 30 minutes
- 2026-08-04 PASS 33 minutes
- 2026-08-05 PASS 32 minutes
- 2026-08-06 PASS 34 minutes
- 2026-08-07 PASS 33 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 42 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 37 minutes
  - PASS 31 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 42 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 37 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 32 minutes
  - PASS 33 minutes
- 2026-07-30 PASS 32 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 30 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
