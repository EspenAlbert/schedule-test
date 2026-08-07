# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleAutoScaling Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.03s
[2026-07-21 00:52](#error-2026-07-21t0052540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.10s
[2026-07-23 00:49](#error-2026-07-23t0049270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:44+00:00
```
2026-07-09T00:57:44.6184858Z === RUN   TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-07-09T00:57:45.9271171Z     shared_resource.go:160: 
2026-07-09T00:57:45.9274223Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:45.9278155Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:57:45.9280894Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:57:45.9283623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:57:45.9286577Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:57:45.9289253Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-09T00:57:45.9291961Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:212
2026-07-09T00:57:45.9293145Z         	Error:      	Received unexpected error:
2026-07-09T00:57:45.9297065Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:45.9299056Z         	Test:       	TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-07-09T00:57:45.9302307Z         	Messages:   	Project creation failed: test-acc-tf-p-8543412809366491927, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:45.9304386Z --- FAIL: TestAccAdvancedCluster_effectiveToggleAutoScaling (1.31s)
```

- 2026-07-10 PASS 46 minutes
- 2026-07-11 PASS 19 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 28 minutes
- 2026-07-14 PASS 27 minutes
- 2026-07-15 PASS 32 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 35 minutes
- 2026-07-18 PASS 33 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:54+00:00
```
2026-07-21T00:52:54.9409543Z === RUN   TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-07-21T00:52:55.8865198Z     shared_resource.go:160: 
2026-07-21T00:52:55.8866581Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:55.8868386Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:55.8870393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:55.8872161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:55.8873942Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:55.8875841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-21T00:52:55.8877795Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:212
2026-07-21T00:52:55.8878604Z         	Error:      	Received unexpected error:
2026-07-21T00:52:55.8881519Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:55.8882979Z         	Test:       	TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-07-21T00:52:55.8885332Z         	Messages:   	Project creation failed: test-acc-tf-p-3297185025533806444, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:55.8886849Z --- FAIL: TestAccAdvancedCluster_effectiveToggleAutoScaling (0.95s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:27+00:00
```
2026-07-23T00:49:27.0076197Z === RUN   TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-07-23T00:49:27.8739910Z     shared_resource.go:160: 
2026-07-23T00:49:27.8742236Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:27.8744747Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:27.8747168Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:27.8749534Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:27.8751636Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:27.8753812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-23T00:49:27.8755817Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:212
2026-07-23T00:49:27.8756646Z         	Error:      	Received unexpected error:
2026-07-23T00:49:27.8759485Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:27.8761145Z         	Test:       	TestAccAdvancedCluster_effectiveToggleAutoScaling
2026-07-23T00:49:27.8763641Z         	Messages:   	Project creation failed: test-acc-tf-p-4786061364244205610, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:27.8765218Z --- FAIL: TestAccAdvancedCluster_effectiveToggleAutoScaling (0.87s)
```

- 2026-07-24 PASS 42 minutes
- 2026-07-25 PASS 31 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 31 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 19 minutes
  - PASS 19 minutes
- 2026-08-01 PASS 19 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 minutes
- 2026-08-04 PASS 20 minutes
- 2026-08-05 PASS 19 minutes
- 2026-08-06 PASS 20 minutes
- 2026-08-07 PASS 22 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 21 minutes
  - PASS 17 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 29 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 30 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 20 minutes
  - PASS 24 minutes
- 2026-07-30 PASS 22 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
