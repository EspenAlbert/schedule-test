# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 09:39](#error-2026-05-07t0939520000) | NO_CAPACITY /api/atlas/v2/groups/69fc5c6d2f0288ef643ef821/containers | dev |  | 4.04s
[2026-05-09 01:03](#error-2026-05-09t0103400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.07s
[2026-05-30 01:07](#error-2026-05-30t0107110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-06-01 01:21](#error-2026-06-01t0121380000) | NO_CAPACITY /api/atlas/v2/groups/6a1cdba2adbc612d01a23d50/containers | dev |  | 4.01s
[2026-06-05 01:16](#error-2026-06-05t0116170000) | NO_CAPACITY /api/atlas/v2/groups/6a2220df42e1e504cd7aec7d/containers | dev |  | 6.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 5 minutes
  - FAIL 4 seconds

### Error 2026-05-07T09:39:52+00:00
```
2026-05-07T09:39:52.3456389Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-05-07T09:39:52.3456996Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-2256824033303919204
2026-05-07T09:39:52.3463070Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-05-07T09:39:52.3477526Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-05-07T09:39:52.3478066Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-05-07T09:39:52.3478480Z         
2026-05-07T09:39:52.3480431Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69fc5c6d2f0288ef643ef821/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69fc5c6d2f0288ef643ef821. Reason: Conflict. Params: [AZURE 69fc5c6d2f0288ef643ef821], BadRequestDetail: 
2026-05-07T09:39:52.3481818Z         
2026-05-07T09:39:52.3482192Z           with mongodbatlas_network_container.test,
2026-05-07T09:39:52.3482916Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-05-07T09:39:52.3483601Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-05-07T09:39:52.3483963Z         
2026-05-07T09:39:52.3484263Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (4.45s)
```

- 2026-05-08 PASS 4 minutes
- 2026-05-09

### Error 2026-05-09T01:03:40+00:00
```
2026-05-09T01:03:40.8332010Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-05-09T01:03:40.8333161Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-5514274447825850467
2026-05-09T01:03:40.8334524Z     resource_test.go:31: 
2026-05-09T01:03:40.8336606Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:03:40.8340995Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:03:40.8345015Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:03:40.8348508Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkpeering/resource_test.go:31
2026-05-09T01:03:40.8349604Z         	Error:      	Received unexpected error:
2026-05-09T01:03:40.8351861Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:03:40.8353165Z         	Test:       	TestAccNetworkRSNetworkPeering_Azure
2026-05-09T01:03:40.8355417Z         	Messages:   	Project creation failed: test-acc-tf-p-5514274447825850467, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:03:40.8356832Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (66.72s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 minutes
- 2026-05-12 PASS 5 minutes
- 2026-05-13 PASS 4 minutes
- 2026-05-14 PASS 4 minutes
- 2026-05-15 PASS 4 minutes
- 2026-05-16 PASS 4 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 4 minutes
- 2026-05-19 PASS 4 minutes
- 2026-05-20 PASS 4 minutes
- 2026-05-21 PASS 4 minutes
- 2026-05-22 PASS 4 minutes
- 2026-05-23 PASS 4 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 5 minutes
- 2026-05-26 PASS 4 minutes
- 2026-05-27 PASS 4 minutes
- 2026-05-28 PASS 4 minutes
- 2026-05-29 PASS 4 minutes
- 2026-05-30

### Error 2026-05-30T01:07:11+00:00
```
2026-05-30T01:07:11.7203368Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-05-30T01:07:11.7204133Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-6684063937204769818
2026-05-30T01:07:11.7204955Z     resource_test.go:31: 
2026-05-30T01:07:11.7205920Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:07:11.7207790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:07:11.7209593Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:07:11.7211860Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkpeering/resource_test.go:31
2026-05-30T01:07:11.7212702Z         	Error:      	Received unexpected error:
2026-05-30T01:07:11.7214644Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:07:11.7215911Z         	Test:       	TestAccNetworkRSNetworkPeering_Azure
2026-05-30T01:07:11.7217714Z         	Messages:   	Project creation failed: test-acc-tf-p-6684063937204769818, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:07:11.7218903Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (64.11s)
```

- 2026-05-31: MISSING
- 2026-06-01

### Error 2026-06-01T01:21:38+00:00
```
2026-06-01T01:21:38.2938534Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-06-01T01:21:38.2939189Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-1794893675123775198
2026-06-01T01:21:38.2946615Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-06-01T01:21:38.2976147Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-06-01T01:21:38.2976894Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-06-01T01:21:38.2977506Z         
2026-06-01T01:21:38.2979513Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1cdba2adbc612d01a23d50/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6a1cdba2adbc612d01a23d50. Reason: Conflict. Params: [AZURE 6a1cdba2adbc612d01a23d50], BadRequestDetail: 
2026-06-01T01:21:38.2980928Z         
2026-06-01T01:21:38.2981329Z           with mongodbatlas_network_container.test,
2026-06-01T01:21:38.2982075Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-06-01T01:21:38.2983117Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-06-01T01:21:38.2983504Z         
2026-06-01T01:21:38.2983829Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (4.10s)
```

- 2026-06-02 PASS 5 minutes
- 2026-06-03 PASS 4 minutes
- 2026-06-04 PASS 4 minutes
- 2026-06-05

### Error 2026-06-05T01:16:17+00:00
```
2026-06-05T01:16:17.7096489Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-06-05T01:16:17.7097120Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-8411396975979129034
2026-06-05T01:16:17.7109800Z    test_step_number=1 test_name=TestAccNetworkRSNetworkPeering_Azure test_terraform_path=/home/runner/work/_temp/0c71058a-250f-4458-9a6f-d774b4e27d82/terraform
2026-06-05T01:16:17.7110749Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-06-05T01:16:17.7111342Z         
2026-06-05T01:16:17.7113349Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220df42e1e504cd7aec7d/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6a2220df42e1e504cd7aec7d. Reason: Conflict. Params: [AZURE 6a2220df42e1e504cd7aec7d], BadRequestDetail: 
2026-06-05T01:16:17.7114734Z         
2026-06-05T01:16:17.7115280Z           with mongodbatlas_network_container.test,
2026-06-05T01:16:17.7116037Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-06-05T01:16:17.7116750Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-06-05T01:16:17.7117128Z         
2026-06-05T01:16:17.7117452Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (6.63s)
```


## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 6 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 5 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
