# cluster/cluster/TestAccCluster_withAutoScalingAWS Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:49](#error-2026-07-09t0049030000) |  | dev | flaky_500 | 65.00s
[2026-07-14 00:41](#error-2026-07-14t0041490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.03s
[2026-07-18 00:47](#error-2026-07-18t0047460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.06s
[2026-07-21 00:52](#error-2026-07-21t0052290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:49:03+00:00
```
2026-07-09T00:49:03.1068690Z === RUN   TestAccCluster_withAutoScalingAWS
2026-07-09T00:50:08.1552056Z     shared_resource.go:160: 
2026-07-09T00:50:08.1554367Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:50:08.1556284Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:50:08.1558035Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:50:08.1559773Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:50:08.1561657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:50:08.1563710Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:971
2026-07-09T00:50:08.1564514Z         	Error:      	Received unexpected error:
2026-07-09T00:50:08.1565418Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:50:08.1566018Z         	Test:       	TestAccCluster_withAutoScalingAWS
2026-07-09T00:50:08.1567057Z         	Messages:   	Project creation failed: test-acc-tf-p-8459623692294120928, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:50:08.1567783Z --- FAIL: TestAccCluster_withAutoScalingAWS (65.05s)
```

- 2026-07-10 PASS 47 minutes
- 2026-07-11 PASS 20 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 24 minutes
- 2026-07-14

### Error 2026-07-14T00:41:49+00:00
```
2026-07-14T00:41:49.4972410Z === RUN   TestAccCluster_withAutoScalingAWS
2026-07-14T00:43:04.8235895Z     shared_resource.go:160: 
2026-07-14T00:43:04.8237247Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T00:43:04.8242243Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-14T00:43:04.8244232Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-14T00:43:04.8246210Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-14T00:43:04.8248629Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-14T00:43:04.8250998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:971
2026-07-14T00:43:04.8251900Z         	Error:      	Received unexpected error:
2026-07-14T00:43:04.8253976Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:04.8255169Z         	Test:       	TestAccCluster_withAutoScalingAWS
2026-07-14T00:43:04.8257099Z         	Messages:   	Project creation failed: test-acc-tf-p-4066344396546801593, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:43:04.8258434Z --- FAIL: TestAccCluster_withAutoScalingAWS (75.33s)
```

- 2026-07-15 PASS 20 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 36 minutes
- 2026-07-18

### Error 2026-07-18T00:47:46+00:00
```
2026-07-18T00:47:46.0254851Z === RUN   TestAccCluster_withAutoScalingAWS
2026-07-18T00:49:12.5851430Z     shared_resource.go:160: 
2026-07-18T00:49:12.5854571Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:49:12.5859827Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-18T00:49:12.5864598Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-18T00:49:12.5868543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-18T00:49:12.5871415Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-18T00:49:12.5873890Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:971
2026-07-18T00:49:12.5874902Z         	Error:      	Received unexpected error:
2026-07-18T00:49:12.5879467Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:12.5881856Z         	Test:       	TestAccCluster_withAutoScalingAWS
2026-07-18T00:49:12.5885283Z         	Messages:   	Project creation failed: test-acc-tf-p-4020421071255892799, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:12.5887107Z --- FAIL: TestAccCluster_withAutoScalingAWS (86.56s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:29+00:00
```
2026-07-21T00:52:29.2177527Z === RUN   TestAccCluster_withAutoScalingAWS
2026-07-21T00:52:29.8612634Z     shared_resource.go:160: 
2026-07-21T00:52:29.8615091Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:29.8618925Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:29.8621742Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:29.8624342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:29.8626701Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:29.8628954Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:971
2026-07-21T00:52:29.8629809Z         	Error:      	Received unexpected error:
2026-07-21T00:52:29.8632802Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:29.8634294Z         	Test:       	TestAccCluster_withAutoScalingAWS
2026-07-21T00:52:29.8637160Z         	Messages:   	Project creation failed: test-acc-tf-p-6280867226304019292, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:29.8638782Z --- FAIL: TestAccCluster_withAutoScalingAWS (0.65s)
```

- 2026-07-22 PASS 39 minutes
- 2026-07-23 PASS an hour
- 2026-07-24 PASS 31 minutes
- 2026-07-25 PASS 29 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 28 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 18 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 minutes
- 2026-08-04 PASS 20 minutes
- 2026-08-05 PASS 17 minutes
- 2026-08-06 PASS 18 minutes
- 2026-08-07 PASS 19 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 26 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 22 minutes
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
- 2026-07-26 PASS 22 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 19 minutes
  - PASS 19 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 19 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
