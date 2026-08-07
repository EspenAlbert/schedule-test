# advanced_cluster/advancedcluster/TestAccAdvancedCluster_tls13CustomCiphers Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058140000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.01s
[2026-07-11 00:55](#error-2026-07-11t0055160000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s
[2026-07-21 00:53](#error-2026-07-21t0053160000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.09s
[2026-07-23 00:49](#error-2026-07-23t0049430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:14+00:00
```
2026-07-09T00:58:14.5960732Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-07-09T00:58:15.7331607Z     shared_resource.go:160: 
2026-07-09T00:58:15.7333368Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:15.7336557Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:15.7338754Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:15.7340895Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:15.7343034Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:15.7345802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2128
2026-07-09T00:58:15.7346614Z         	Error:      	Received unexpected error:
2026-07-09T00:58:15.7349663Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:15.7351146Z         	Test:       	TestAccAdvancedCluster_tls13CustomCiphers
2026-07-09T00:58:15.7353569Z         	Messages:   	Project creation failed: test-acc-tf-p-6591147125255690520, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:15.7355479Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (1.14s)
```

- 2026-07-10 PASS 40 minutes
- 2026-07-11

### Error 2026-07-11T00:55:16+00:00
```
2026-07-11T00:55:16.7907733Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-07-11T00:55:17.0651085Z     shared_resource.go:160: 
2026-07-11T00:55:17.0653128Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:17.0656408Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:55:17.0659136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:55:17.0661754Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:55:17.0663695Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:55:17.0665559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2128
2026-07-11T00:55:17.0666367Z         	Error:      	Received unexpected error:
2026-07-11T00:55:17.0669456Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:17.0670853Z         	Test:       	TestAccAdvancedCluster_tls13CustomCiphers
2026-07-11T00:55:17.0673211Z         	Messages:   	Project creation failed: test-acc-tf-p-571254487955456382, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:17.0675935Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (0.28s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 24 minutes
- 2026-07-14 PASS 32 minutes
- 2026-07-15 PASS 24 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 36 minutes
- 2026-07-18 PASS 27 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:16+00:00
```
2026-07-21T00:53:16.2728956Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-07-21T00:53:17.1913915Z     shared_resource.go:160: 
2026-07-21T00:53:17.1915141Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:17.1916919Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:17.1918669Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:17.1920679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:17.1922447Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:17.1924274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2128
2026-07-21T00:53:17.1925467Z         	Error:      	Received unexpected error:
2026-07-21T00:53:17.1928252Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:17.1929627Z         	Test:       	TestAccAdvancedCluster_tls13CustomCiphers
2026-07-21T00:53:17.1932023Z         	Messages:   	Project creation failed: test-acc-tf-p-28390188067929246, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:17.1933557Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (0.92s)
```

- 2026-07-22 PASS 38 minutes
- 2026-07-23

### Error 2026-07-23T00:49:43+00:00
```
2026-07-23T00:49:43.3287079Z === RUN   TestAccAdvancedCluster_tls13CustomCiphers
2026-07-23T00:49:43.8774495Z     shared_resource.go:160: 
2026-07-23T00:49:43.8776711Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:43.8779617Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:43.8782579Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:43.8784632Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:43.8786606Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:43.8788830Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:2128
2026-07-23T00:49:43.8789753Z         	Error:      	Received unexpected error:
2026-07-23T00:49:43.8792769Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:43.8794218Z         	Test:       	TestAccAdvancedCluster_tls13CustomCiphers
2026-07-23T00:49:43.8796566Z         	Messages:   	Project creation failed: test-acc-tf-p-8264086282044316829, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:43.8798112Z --- FAIL: TestAccAdvancedCluster_tls13CustomCiphers (0.55s)
```

- 2026-07-24 PASS 43 minutes
- 2026-07-25 PASS 27 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 26 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 18 minutes
  - PASS 16 minutes
- 2026-08-01 PASS 17 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04 PASS 16 minutes
- 2026-08-05 PASS 18 minutes
- 2026-08-06 PASS 16 minutes
- 2026-08-07 PASS 19 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 23 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 29 minutes
  - PASS 18 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 38 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 28 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 20 minutes
  - PASS 26 minutes
- 2026-07-30 PASS 20 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
