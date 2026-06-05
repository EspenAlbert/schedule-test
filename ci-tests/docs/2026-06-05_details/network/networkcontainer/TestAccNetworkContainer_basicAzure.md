# network/networkcontainer/TestAccNetworkContainer_basicAzure Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 09:39](#error-2026-05-07t0939520000) | NO_CAPACITY /api/atlas/v2/groups/69fc5c6c2f0288ef643ef7c0/containers | dev |  | 0.06s
[2026-05-19 01:08](#error-2026-05-19t0108530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-06-02 01:13](#error-2026-06-02t0113230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s
[2026-06-05 01:16](#error-2026-06-05t0116170000) | NO_CAPACITY /api/atlas/v2/groups/6a2220de42e1e504cd7ad5a1/containers | dev |  | 0.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 2 minutes
  - FAIL a moment

### Error 2026-05-07T09:39:52+00:00
```
2026-05-07T09:39:52.3427192Z === RUN   TestAccNetworkContainer_basicAzure
2026-05-07T09:39:52.3431291Z === CONT  TestAccNetworkContainer_basicAzure
2026-05-07T09:39:52.3444709Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/faa8a233-ec21-4f9f-978f-08ca6f9774e0/terraform test_working_directory=/tmp/plugintest1696566349
2026-05-07T09:39:52.3445781Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-05-07T09:39:52.3446268Z         
2026-05-07T09:39:52.3448393Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fc5c6c2f0288ef643ef7c0/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69fc5c6c2f0288ef643ef7c0. Reason: Conflict. Params: [AZURE 69fc5c6c2f0288ef643ef7c0], BadRequestDetail: 
2026-05-07T09:39:52.3449786Z         
2026-05-07T09:39:52.3450168Z           with mongodbatlas_network_container.test,
2026-05-07T09:39:52.3450892Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-05-07T09:39:52.3451589Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-05-07T09:39:52.3451956Z         
2026-05-07T09:39:52.3452259Z --- FAIL: TestAccNetworkContainer_basicAzure (0.63s)
```

- 2026-05-08 PASS 2 minutes
- 2026-05-09 PASS 2 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 2 minutes
- 2026-05-12 PASS 2 minutes
- 2026-05-13 PASS 2 minutes
- 2026-05-14 PASS 2 minutes
- 2026-05-15 PASS 2 minutes
- 2026-05-16 PASS 2 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 2 minutes
- 2026-05-19

### Error 2026-05-19T01:08:53+00:00
```
2026-05-19T01:08:53.2926873Z === RUN   TestAccNetworkContainer_basicAzure
2026-05-19T01:08:53.2927587Z     resource_network_container_test.go:61: Creating execution project (1): test-acc-tf-p-218325635853706878
2026-05-19T01:08:53.2928547Z     resource_network_container_test.go:61: 
2026-05-19T01:08:53.2929537Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:53.2931360Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:53.2933176Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:53.2935248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkcontainer/resource_network_container_test.go:61
2026-05-19T01:08:53.2936969Z         	Error:      	Received unexpected error:
2026-05-19T01:08:53.2938957Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:53.2940282Z         	Test:       	TestAccNetworkContainer_basicAzure
2026-05-19T01:08:53.2942110Z         	Messages:   	Project creation failed: test-acc-tf-p-218325635853706878, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:53.2943436Z --- FAIL: TestAccNetworkContainer_basicAzure (63.23s)
```

- 2026-05-20 PASS 2 minutes
- 2026-05-21 PASS 2 minutes
- 2026-05-22 PASS 2 minutes
- 2026-05-23 PASS 2 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 2 minutes
- 2026-05-26 PASS 2 minutes
- 2026-05-27 PASS 2 minutes
- 2026-05-28 PASS 2 minutes
- 2026-05-29 PASS 2 minutes
- 2026-05-30 PASS 2 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 2 minutes
- 2026-06-02

### Error 2026-06-02T01:13:23+00:00
```
2026-06-02T01:13:23.3286179Z === RUN   TestAccNetworkContainer_basicAzure
2026-06-02T01:13:23.3287218Z     resource_network_container_test.go:61: Creating execution project (1): test-acc-tf-p-4943287278936423513
2026-06-02T01:13:23.3287868Z     resource_network_container_test.go:61: 
2026-06-02T01:13:23.3288882Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:13:23.3290753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:13:23.3292690Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:13:23.3295007Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkcontainer/resource_network_container_test.go:61
2026-06-02T01:13:23.3295950Z         	Error:      	Received unexpected error:
2026-06-02T01:13:23.3298165Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:23.3299262Z         	Test:       	TestAccNetworkContainer_basicAzure
2026-06-02T01:13:23.3301116Z         	Messages:   	Project creation failed: test-acc-tf-p-4943287278936423513, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:13:23.3302314Z --- FAIL: TestAccNetworkContainer_basicAzure (67.22s)
```

- 2026-06-03 PASS 2 minutes
- 2026-06-04 PASS 2 minutes
- 2026-06-05

### Error 2026-06-05T01:16:17+00:00
```
2026-06-05T01:16:17.7055786Z === RUN   TestAccNetworkContainer_basicAzure
2026-06-05T01:16:17.7070123Z === CONT  TestAccNetworkContainer_basicAzure
2026-06-05T01:16:17.7083973Z   
2026-06-05T01:16:17.7084518Z     resource_network_container_test.go:64: Step 1/2 error: Error running apply: exit status 1
2026-06-05T01:16:17.7085034Z         
2026-06-05T01:16:17.7087484Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220de42e1e504cd7ad5a1/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6a2220de42e1e504cd7ad5a1. Reason: Conflict. Params: [AZURE 6a2220de42e1e504cd7ad5a1], BadRequestDetail: 
2026-06-05T01:16:17.7088902Z         
2026-06-05T01:16:17.7089307Z           with mongodbatlas_network_container.test,
2026-06-05T01:16:17.7090075Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-06-05T01:16:17.7090820Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-06-05T01:16:17.7091219Z         
2026-06-05T01:16:17.7091537Z --- FAIL: TestAccNetworkContainer_basicAzure (0.83s)
```


## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 2 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 2 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 2 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
