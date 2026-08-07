# advanced_cluster/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058120000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.00s
[2026-07-11 00:55](#error-2026-07-11t0055160000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s
[2026-07-21 00:53](#error-2026-07-21t0053150000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.05s
[2026-07-23 00:49](#error-2026-07-23t0049420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:12+00:00
```
2026-07-09T00:58:12.3582880Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-07-09T00:58:13.4019592Z     shared_resource.go:160: 
2026-07-09T00:58:13.4021541Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:13.4023898Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:13.4026543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:13.4028839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:13.4031134Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:13.4033230Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:1061
2026-07-09T00:58:13.4034056Z         	Error:      	Received unexpected error:
2026-07-09T00:58:13.4037064Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:13.4038900Z         	Test:       	TestAccAdvancedCluster_removeBlocksFromConfig
2026-07-09T00:58:13.4041458Z         	Messages:   	Project creation failed: test-acc-tf-p-9213992418251749388, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:13.4043106Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (1.05s)
```

- 2026-07-10 PASS an hour
- 2026-07-11

### Error 2026-07-11T00:55:16+00:00
```
2026-07-11T00:55:16.1290575Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-07-11T00:55:16.5249433Z     shared_resource.go:160: 
2026-07-11T00:55:16.5251131Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:16.5253126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:55:16.5255135Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:55:16.5256898Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:55:16.5258665Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:55:16.5260520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:1061
2026-07-11T00:55:16.5261687Z         	Error:      	Received unexpected error:
2026-07-11T00:55:16.5264675Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:16.5266159Z         	Test:       	TestAccAdvancedCluster_removeBlocksFromConfig
2026-07-11T00:55:16.5268814Z         	Messages:   	Project creation failed: test-acc-tf-p-1812421995835546919, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:16.5270357Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (0.40s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 55 minutes
- 2026-07-14 PASS an hour
- 2026-07-15 PASS 53 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 50 minutes
- 2026-07-18 PASS 51 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:15+00:00
```
2026-07-21T00:53:15.2624271Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-07-21T00:53:15.7775343Z     shared_resource.go:160: 
2026-07-21T00:53:15.7776813Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:15.7779444Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:15.7782291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:15.7784080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:15.7785805Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:15.7787663Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:1061
2026-07-21T00:53:15.7788465Z         	Error:      	Received unexpected error:
2026-07-21T00:53:15.7791518Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:15.7792945Z         	Test:       	TestAccAdvancedCluster_removeBlocksFromConfig
2026-07-21T00:53:15.7795499Z         	Messages:   	Project creation failed: test-acc-tf-p-5082088561024219209, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:15.7796987Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (0.52s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:42+00:00
```
2026-07-23T00:49:42.5779489Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-07-23T00:49:43.1001986Z     shared_resource.go:160: 
2026-07-23T00:49:43.1004409Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:43.1006633Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:43.1008512Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:43.1010383Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:43.1012476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:43.1014639Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:1061
2026-07-23T00:49:43.1015496Z         	Error:      	Received unexpected error:
2026-07-23T00:49:43.1018358Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:43.1019812Z         	Test:       	TestAccAdvancedCluster_removeBlocksFromConfig
2026-07-23T00:49:43.1022302Z         	Messages:   	Project creation failed: test-acc-tf-p-8404033482009431319, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:43.1023865Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (0.52s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 57 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS an hour
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 46 minutes
  - PASS 44 minutes
- 2026-08-01 PASS 44 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 48 minutes
- 2026-08-04 PASS 45 minutes
- 2026-08-05 PASS 49 minutes
- 2026-08-06 PASS 47 minutes
- 2026-08-07 PASS an hour

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 50 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 45 minutes
  - PASS 46 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 46 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 56 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 46 minutes
  - PASS 45 minutes
- 2026-07-30 PASS 44 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 44 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
