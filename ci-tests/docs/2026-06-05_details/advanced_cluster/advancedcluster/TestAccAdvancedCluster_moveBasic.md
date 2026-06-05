# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveBasic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 00:56](#error-2026-05-16t0056410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s
[2026-05-21 01:06](#error-2026-05-21t0106030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.05s
[2026-05-23 01:01](#error-2026-05-23t0101550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.08s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 32 minutes
- 2026-05-08 PASS 21 minutes
- 2026-05-09 PASS 25 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 21 minutes
- 2026-05-12 PASS 21 minutes
- 2026-05-13 PASS 18 minutes
- 2026-05-14 PASS 44 minutes
- 2026-05-15 PASS 17 minutes
- 2026-05-16

### Error 2026-05-16T00:56:41+00:00
```
2026-05-16T00:56:41.3565108Z === RUN   TestAccAdvancedCluster_moveBasic
2026-05-16T00:57:42.8904644Z     shared_resource.go:160: 
2026-05-16T00:57:42.8906238Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:57:42.8909456Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-16T00:57:42.8912283Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-16T00:57:42.8914569Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-16T00:57:42.8916869Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-16T00:57:42.8919535Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:17
2026-05-16T00:57:42.8920585Z         	Error:      	Received unexpected error:
2026-05-16T00:57:42.8922559Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:57:42.8923612Z         	Test:       	TestAccAdvancedCluster_moveBasic
2026-05-16T00:57:42.8925355Z         	Messages:   	Project creation failed: test-acc-tf-p-218920367249392261, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:57:42.8926719Z --- FAIL: TestAccAdvancedCluster_moveBasic (61.54s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 25 minutes
- 2026-05-19 PASS 18 minutes
- 2026-05-20 PASS 22 minutes
- 2026-05-21

### Error 2026-05-21T01:06:03+00:00
```
2026-05-21T01:06:03.3436414Z === RUN   TestAccAdvancedCluster_moveBasic
2026-05-21T01:07:19.8390629Z     shared_resource.go:160: 
2026-05-21T01:07:19.8392570Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:07:19.8396352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-21T01:07:19.8399086Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-21T01:07:19.8401445Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-21T01:07:19.8403415Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-21T01:07:19.8405745Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:17
2026-05-21T01:07:19.8406573Z         	Error:      	Received unexpected error:
2026-05-21T01:07:19.8408471Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:19.8409516Z         	Test:       	TestAccAdvancedCluster_moveBasic
2026-05-21T01:07:19.8411430Z         	Messages:   	Project creation failed: test-acc-tf-p-1341317388972904221, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:19.8412599Z --- FAIL: TestAccAdvancedCluster_moveBasic (76.50s)
```

- 2026-05-22 PASS 38 minutes
- 2026-05-23

### Error 2026-05-23T01:01:55+00:00
```
2026-05-23T01:01:55.7470712Z === RUN   TestAccAdvancedCluster_moveBasic
2026-05-23T01:02:59.5005279Z     shared_resource.go:160: 
2026-05-23T01:02:59.5007026Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:02:59.5008817Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-23T01:02:59.5010574Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-23T01:02:59.5012318Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-23T01:02:59.5034425Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-23T01:02:59.5036691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:17
2026-05-23T01:02:59.5037529Z         	Error:      	Received unexpected error:
2026-05-23T01:02:59.5039429Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:59.5040426Z         	Test:       	TestAccAdvancedCluster_moveBasic
2026-05-23T01:02:59.5042152Z         	Messages:   	Project creation failed: test-acc-tf-p-3779232679249865231, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:59.5043503Z --- FAIL: TestAccAdvancedCluster_moveBasic (63.76s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 28 minutes
- 2026-05-26 PASS 19 minutes
- 2026-05-27 PASS 59 minutes
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.1910786Z === RUN   TestAccAdvancedCluster_moveBasic
2026-05-28T01:01:19.8858769Z     shared_resource.go:160: 
2026-05-28T01:01:19.8860472Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:19.8863309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:19.8865166Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:19.8866957Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:19.8869023Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:19.8871019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_upgrade_state_test.go:17
2026-05-28T01:01:19.8871866Z         	Error:      	Received unexpected error:
2026-05-28T01:01:19.8875162Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:19.8876589Z         	Test:       	TestAccAdvancedCluster_moveBasic
2026-05-28T01:01:19.8879129Z         	Messages:   	Project creation failed: test-acc-tf-p-7275932754453900890, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:19.8880634Z --- FAIL: TestAccAdvancedCluster_moveBasic (1.70s)
```

- 2026-05-29 PASS 19 minutes
- 2026-05-30 PASS 16 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 25 minutes
- 2026-06-02 PASS 17 minutes
- 2026-06-03 PASS 23 minutes
- 2026-06-04 PASS 42 minutes
- 2026-06-05 PASS 19 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 19 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 19 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 16 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 16 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
