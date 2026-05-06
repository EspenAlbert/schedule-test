# cluster/cluster/TestAccCluster_MultiRegion Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:44](#error-2026-04-07t0044440000) |  | dev | timeout | 12915.03s
[2026-04-09 00:38](#error-2026-04-09t0038100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s
[2026-04-14 00:49](#error-2026-04-14t0049300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.07s
[2026-04-16 00:50](#error-2026-04-16t0050580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.02s
[2026-05-05 00:51](#error-2026-05-05t0051190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:44:44+00:00
```
2026-04-07T00:44:44.5918795Z === RUN   TestAccCluster_MultiRegion
2026-04-07T00:45:08.0038085Z === CONT  TestAccCluster_MultiRegion
2026-04-07T04:20:19.6969719Z === NAME  TestAccCluster_MultiRegion
2026-04-07T04:20:19.6970514Z     resource_cluster_test.go:480: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:20:19.6971032Z         
2026-04-07T04:20:19.6971991Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-5986332485521778975): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:20:19.6972696Z         
2026-04-07T04:20:19.6972941Z --- FAIL: TestAccCluster_MultiRegion (12915.31s)
```

- 2026-04-08 PASS 38 minutes
- 2026-04-09

### Error 2026-04-09T00:38:10+00:00
```
2026-04-09T00:38:10.8713755Z === RUN   TestAccCluster_MultiRegion
2026-04-09T00:39:13.5798146Z     shared_resource.go:160: 
2026-04-09T00:39:13.5802315Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:39:13.5805076Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-09T00:39:13.5807830Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-09T00:39:13.5810240Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-09T00:39:13.5812781Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-09T00:39:13.5815122Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:451
2026-04-09T00:39:13.5816100Z         	Error:      	Received unexpected error:
2026-04-09T00:39:13.5818459Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:39:13.5820002Z         	Test:       	TestAccCluster_MultiRegion
2026-04-09T00:39:13.5822050Z         	Messages:   	Project creation failed: test-acc-tf-p-7546286798835922087, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:39:13.5823356Z --- FAIL: TestAccCluster_MultiRegion (62.71s)
```

- 2026-04-10 PASS 56 minutes
- 2026-04-11 PASS 39 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 42 minutes
- 2026-04-14

### Error 2026-04-14T00:49:30+00:00
```
2026-04-14T00:49:30.7025287Z === RUN   TestAccCluster_MultiRegion
2026-04-14T00:50:41.3674127Z     shared_resource.go:160: 
2026-04-14T00:50:41.3677508Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T00:50:41.3679933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-14T00:50:41.3682040Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-14T00:50:41.3684179Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-14T00:50:41.3686334Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-14T00:50:41.3688453Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:451
2026-04-14T00:50:41.3689263Z         	Error:      	Received unexpected error:
2026-04-14T00:50:41.3691534Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:50:41.3692543Z         	Test:       	TestAccCluster_MultiRegion
2026-04-14T00:50:41.3694265Z         	Messages:   	Project creation failed: test-acc-tf-p-1915806398554369302, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:50:41.3695476Z --- FAIL: TestAccCluster_MultiRegion (70.67s)
```

- 2026-04-15 PASS 41 minutes
- 2026-04-16

### Error 2026-04-16T00:50:58+00:00
```
2026-04-16T00:50:58.7666839Z === RUN   TestAccCluster_MultiRegion
2026-04-16T00:52:14.0053776Z     shared_resource.go:160: 
2026-04-16T00:52:14.0055542Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:52:14.0057614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-16T00:52:14.0060020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-16T00:52:14.0061970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-16T00:52:14.0063918Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-16T00:52:14.0065912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:451
2026-04-16T00:52:14.0066733Z         	Error:      	Received unexpected error:
2026-04-16T00:52:14.0068953Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:52:14.0070372Z         	Test:       	TestAccCluster_MultiRegion
2026-04-16T00:52:14.0072216Z         	Messages:   	Project creation failed: test-acc-tf-p-5356068693023682960, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:52:14.0073422Z --- FAIL: TestAccCluster_MultiRegion (75.24s)
```

- 2026-04-17 PASS 38 minutes
- 2026-04-18 PASS 44 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 37 minutes
- 2026-04-21 PASS 40 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 50 minutes
- 2026-04-24 PASS 40 minutes
- 2026-04-25 PASS 36 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 40 minutes
- 2026-04-28 PASS 46 minutes
- 2026-04-29 PASS 44 minutes
- 2026-04-30 PASS 56 minutes
- 2026-05-01 PASS 43 minutes
- 2026-05-02 PASS 36 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 41 minutes
- 2026-05-05

### Error 2026-05-05T00:51:19+00:00
```
2026-05-05T00:51:19.4219173Z === RUN   TestAccCluster_MultiRegion
2026-05-05T00:52:26.0788434Z     shared_resource.go:160: 
2026-05-05T00:52:26.0789924Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:52:26.0793018Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-05T00:52:26.0795787Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-05T00:52:26.0797997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-05T00:52:26.0799934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-05T00:52:26.0802226Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:451
2026-05-05T00:52:26.0803086Z         	Error:      	Received unexpected error:
2026-05-05T00:52:26.0805178Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:52:26.0806655Z         	Test:       	TestAccCluster_MultiRegion
2026-05-05T00:52:26.0808420Z         	Messages:   	Project creation failed: test-acc-tf-p-257258919455290985, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:52:26.0809581Z --- FAIL: TestAccCluster_MultiRegion (66.66s)
```

- 2026-05-06 PASS 58 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 37 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 40 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 36 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 39 minutes
  - PASS 36 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 38 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 39 minutes
- 2026-05-04 PASS an hour
- 2026-05-05: MISSING
- 2026-05-06 PASS 39 minutes
