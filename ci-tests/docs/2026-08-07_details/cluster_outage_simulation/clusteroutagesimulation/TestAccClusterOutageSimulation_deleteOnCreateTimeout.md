# cluster_outage_simulation/clusteroutagesimulation/TestAccClusterOutageSimulation_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:52](#error-2026-07-09t0052560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-07-11 00:45](#error-2026-07-11t0045400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-08-05 00:42](#error-2026-08-05t0042280000) |  | dev |  | 1968.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:52:56+00:00
```
2026-07-09T00:52:56.4408936Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-07-09T00:52:56.4409606Z     resource_test.go:165: Creating execution project (1): test-acc-tf-p-2572776184479421521
2026-07-09T00:54:00.7351903Z     resource_test.go:165: 
2026-07-09T00:54:00.7354406Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:54:00.7357896Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:54:00.7360379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:54:00.7362474Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-09T00:54:00.7364793Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:165
2026-07-09T00:54:00.7366270Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:54:00.7366890Z         	Error:      	Received unexpected error:
2026-07-09T00:54:00.7369437Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:54:00.7370711Z         	Test:       	TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-07-09T00:54:00.7372574Z         	Messages:   	Project creation failed: test-acc-tf-p-2572776184479421521, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:54:00.7373834Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (64.30s)
```

- 2026-07-10 PASS an hour
- 2026-07-11

### Error 2026-07-11T00:45:40+00:00
```
2026-07-11T00:45:40.8887361Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-07-11T00:45:40.8888208Z     resource_test.go:165: Creating execution project (1): test-acc-tf-p-3572066287865956704
2026-07-11T00:46:43.8223002Z     resource_test.go:165: 
2026-07-11T00:46:43.8224896Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:46:43.8227238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:46:43.8229503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:46:43.8231101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-11T00:46:43.8232877Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_test.go:165
2026-07-11T00:46:43.8234011Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:46:43.8234514Z         	Error:      	Received unexpected error:
2026-07-11T00:46:43.8236285Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:43.8237334Z         	Test:       	TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-07-11T00:46:43.8239044Z         	Messages:   	Project creation failed: test-acc-tf-p-3572066287865956704, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:43.8240117Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (62.94s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS an hour
- 2026-07-15 PASS an hour
- 2026-07-16 PASS an hour
- 2026-07-17 PASS an hour
- 2026-07-18 PASS an hour
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 58 minutes
- 2026-07-22 PASS an hour
- 2026-07-23 PASS an hour
- 2026-07-24 PASS an hour
- 2026-07-25 PASS an hour
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS an hour
- 2026-07-30 PASS an hour
- 2026-07-31 PASS an hour
- 2026-08-01 PASS 58 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS an hour
- 2026-08-04 PASS an hour
- 2026-08-05

### Error 2026-08-05T00:42:28+00:00
```
2026-08-05T00:42:28.5213002Z === RUN   TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-08-05T00:42:28.5222151Z === CONT  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-08-05T00:42:38.5257834Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-08-05T00:42:43.5292471Z     pre_check.go:46: Time before creating cluster: 2026-08-05T00:42:38.525467418Z, ProjectID: 6a7286f1e88c966587201087, Cluster name: test-acc-tf-c-110096022216902324
2026-08-05T01:15:16.7220571Z === NAME  TestAccClusterOutageSimulation_deleteOnCreateTimeout
2026-08-05T01:15:16.7221731Z     resource_test.go:168: Error running post-test destroy, there may be dangling resources: exit status 1
2026-08-05T01:15:16.7222261Z         
2026-08-05T01:15:16.7222558Z         Error: Error in delete
2026-08-05T01:15:16.7222838Z         
2026-08-05T01:15:16.7223293Z         cluster name: test-acc-tf-c-110096022216902324, API error details:
2026-08-05T01:15:16.7224203Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a7286f1e88c966587201087/clusters/test-acc-tf-c-110096022216902324
2026-08-05T01:15:16.7225167Z         DELETE: HTTP 400 Bad Request (Error code:
2026-08-05T01:15:16.7225764Z         "CANNOT_TERMINATE_CLUSTER_WITH_UNDERGOING_REGIONAL_OUTAGE_SIMULATION")
2026-08-05T01:15:16.7226470Z         Detail: Cannot terminate cluster test-acc-tf-c-110096022216902324 in project
2026-08-05T01:15:16.7227187Z         test-acc-tf-p-2888814510857601329 because it is undergoing a regional outage
2026-08-05T01:15:16.7227875Z         simulation. End regional outage simulation and try again. Reason: Bad
2026-08-05T01:15:16.7228444Z         Request. Params: [test-acc-tf-c-110096022216902324
2026-08-05T01:15:16.7228964Z         test-acc-tf-p-2888814510857601329], BadRequestDetail: 
2026-08-05T01:15:16.7229485Z --- FAIL: TestAccClusterOutageSimulation_deleteOnCreateTimeout (1968.20s)
```

- 2026-08-06 PASS an hour
- 2026-08-07 PASS an hour

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS an hour
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS an hour
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS an hour
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS an hour
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 59 minutes
  - PASS 59 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS an hour
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
