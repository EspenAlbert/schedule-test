# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 26) FAIL(x 9)
Success rate: 74.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-08 00:55](#error-2026-04-08t0055370000) | NO_CAPACITY /api/atlas/v2/groups/69d5a50e4a37287164df7423/containers | dev |  | 5.08s
[2026-04-09 00:44](#error-2026-04-09t0044320000) | NO_CAPACITY /api/atlas/v2/groups/69d6f4ee9bb208aac605ff8e/containers | dev |  | 4.09s
[2026-04-11 00:49](#error-2026-04-11t0049030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s
[2026-04-15 01:01](#error-2026-04-15t0101340000) |  | dev |  | 480.00s
[2026-04-22 01:27](#error-2026-04-22t0127070000) |  | dev |  | 2469.02s
[2026-05-01 01:10](#error-2026-05-01t0110460000) |  | dev |  | 166.01s
[2026-05-02 00:59](#error-2026-05-02t0059040000) |  | dev |  | 190.08s
[2026-05-04 01:07](#error-2026-05-04t0107240000) |  | dev |  | 166.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 5 minutes
- 2026-04-08

### Error 2026-04-08T00:55:37+00:00
```
2026-04-08T00:55:37.7067624Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-04-08T00:55:37.7068213Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-9055732286223616624
2026-04-08T00:55:37.7074619Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-04-08T00:55:37.7088080Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-04-08T00:55:37.7088702Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-04-08T00:55:37.7089109Z         
2026-04-08T00:55:37.7091184Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a50e4a37287164df7423/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69d5a50e4a37287164df7423. Reason: Conflict. Params: [AZURE 69d5a50e4a37287164df7423], BadRequestDetail: 
2026-04-08T00:55:37.7092781Z         
2026-04-08T00:55:37.7093155Z           with mongodbatlas_network_container.test,
2026-04-08T00:55:37.7093874Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-04-08T00:55:37.7094552Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-04-08T00:55:37.7094904Z         
2026-04-08T00:55:37.7095257Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (5.77s)
```

- 2026-04-09

### Error 2026-04-09T00:44:32+00:00
```
2026-04-09T00:44:32.8832429Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-04-09T00:44:32.8833051Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-575661569954858371
2026-04-09T00:44:32.8839771Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-04-09T00:44:32.8852526Z   
2026-04-09T00:44:32.8852953Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-04-09T00:44:32.8853367Z         
2026-04-09T00:44:32.8855490Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f4ee9bb208aac605ff8e/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69d6f4ee9bb208aac605ff8e. Reason: Conflict. Params: [AZURE 69d6f4ee9bb208aac605ff8e], BadRequestDetail: 
2026-04-09T00:44:32.8856834Z         
2026-04-09T00:44:32.8857220Z           with mongodbatlas_network_container.test,
2026-04-09T00:44:32.8857944Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-04-09T00:44:32.8858629Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-04-09T00:44:32.8858991Z         
2026-04-09T00:44:32.8859299Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (4.90s)
```

- 2026-04-10 PASS 4 minutes
- 2026-04-11

### Error 2026-04-11T00:49:03+00:00
```
2026-04-11T00:49:03.7875136Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-04-11T00:49:03.7875758Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-914105308035976278
2026-04-11T00:49:03.7876273Z     resource_test.go:31: 
2026-04-11T00:49:03.7877235Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:49:03.7879245Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:49:03.7881049Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:49:03.7882892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkpeering/resource_test.go:31
2026-04-11T00:49:03.7883873Z         	Error:      	Received unexpected error:
2026-04-11T00:49:03.7885836Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:49:03.7886880Z         	Test:       	TestAccNetworkRSNetworkPeering_Azure
2026-04-11T00:49:03.7888822Z         	Messages:   	Project creation failed: test-acc-tf-p-914105308035976278, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:49:03.7890009Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (61.46s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 4 minutes
- 2026-04-14 PASS 4 minutes
- 2026-04-15

### Error 2026-04-15T01:01:34+00:00
```
2026-04-15T01:01:34.6423627Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-04-15T01:01:34.6424599Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-2839550741819672244
2026-04-15T01:01:34.6433365Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-04-15T01:01:34.6474092Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-04-15T01:01:34.6474954Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-04-15T01:01:34.6475607Z         
2026-04-15T01:01:34.6476247Z         Error: peer networking is in a failed state: RETRYABLE
2026-04-15T01:01:34.6476954Z         
2026-04-15T01:01:34.6477521Z           with mongodbatlas_network_peering.test,
2026-04-15T01:01:34.6478680Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2026-04-15T01:01:34.6479774Z           19: 		resource "mongodbatlas_network_peering" "test" {
2026-04-15T01:01:34.6480320Z         
2026-04-15T01:01:34.6480789Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (480.05s)
```

- 2026-04-16 PASS 4 minutes
- 2026-04-17 PASS 4 minutes
- 2026-04-18 PASS 4 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 4 minutes
- 2026-04-22

### Error 2026-04-22T01:27:07+00:00
```
2026-04-22T01:27:07.0536663Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-04-22T01:27:07.0537480Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-4730726760530943834
2026-04-22T01:27:07.0544108Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-04-22T01:27:07.0587196Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-04-22T01:27:07.0587821Z     resource_test.go:40: Step 2/3 error: Error running apply: exit status 1
2026-04-22T01:27:07.0588281Z         
2026-04-22T01:27:07.0588802Z         Error: peer networking is in a failed state: Internal Error
2026-04-22T01:27:07.0589243Z         
2026-04-22T01:27:07.0589667Z           with mongodbatlas_network_peering.test,
2026-04-22T01:27:07.0590525Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2026-04-22T01:27:07.0591341Z           19: 		resource "mongodbatlas_network_peering" "test" {
2026-04-22T01:27:07.0591752Z         
2026-04-22T01:27:07.0592104Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (2469.17s)
```

- 2026-04-23 PASS 5 minutes
- 2026-04-24 PASS 4 minutes
- 2026-04-25 PASS 4 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 4 minutes
- 2026-04-28 PASS 4 minutes
- 2026-04-29 PASS 4 minutes
- 2026-04-30 PASS 9 minutes
- 2026-05-01

### Error 2026-05-01T01:10:46+00:00
```
2026-05-01T01:10:46.8157269Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-05-01T01:10:46.8157985Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-5514118900355788893
2026-05-01T01:10:46.8164225Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-05-01T01:10:46.8181677Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-05-01T01:10:46.8182242Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-05-01T01:10:46.8182675Z         
2026-05-01T01:10:46.8184019Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2026-05-01T01:10:46.8184793Z         
2026-05-01T01:10:46.8185183Z           with mongodbatlas_network_peering.test,
2026-05-01T01:10:46.8185915Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2026-05-01T01:10:46.8186599Z           19: 		resource "mongodbatlas_network_peering" "test" {
2026-05-01T01:10:46.8186972Z         
2026-05-01T01:10:46.8195064Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (166.15s)
```

- 2026-05-02

### Error 2026-05-02T00:59:04+00:00
```
2026-05-02T00:59:04.3977327Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-05-02T00:59:04.3977972Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-8832152473612259204
2026-05-02T00:59:04.3984664Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-05-02T00:59:04.3995991Z   
2026-05-02T00:59:04.3996453Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-05-02T00:59:04.3996876Z         
2026-05-02T00:59:04.3997856Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2026-05-02T00:59:04.3998578Z         
2026-05-02T00:59:04.3998951Z           with mongodbatlas_network_peering.test,
2026-05-02T00:59:04.3999659Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2026-05-02T00:59:04.4000331Z           19: 		resource "mongodbatlas_network_peering" "test" {
2026-05-02T00:59:04.4000692Z         
2026-05-02T00:59:04.4005885Z   diagnostic_summary=
2026-05-02T00:59:04.4009485Z    tf_resource_type=mongodbatlas_network_peering tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.11 tf_req_id=1e6d507a-ba4f-93fd-25d2-1a1f1b42347b tf_rpc=ApplyResourceChange diagnostic_detail=""
2026-05-02T00:59:04.4014031Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (190.78s)
```

- 2026-05-03: MISSING
- 2026-05-04

### Error 2026-05-04T01:07:24+00:00
```
2026-05-04T01:07:24.4396961Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-05-04T01:07:24.4397575Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-8594820985718973607
2026-05-04T01:07:24.4403379Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-05-04T01:07:24.4419711Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-05-04T01:07:24.4420245Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-05-04T01:07:24.4420654Z         
2026-05-04T01:07:24.4421605Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2026-05-04T01:07:24.4422299Z         
2026-05-04T01:07:24.4422655Z           with mongodbatlas_network_peering.test,
2026-05-04T01:07:24.4423340Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2026-05-04T01:07:24.4423990Z           19: 		resource "mongodbatlas_network_peering" "test" {
2026-05-04T01:07:24.4424346Z         
2026-05-04T01:07:24.4428509Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (166.93s)
```

- 2026-05-05 PASS 4 minutes
- 2026-05-06 PASS 5 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-03 01:09](#error-2026-05-03t0109140000) |  | qa | 209.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 6 minutes
  - PASS 4 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 5 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 6 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 5 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03

### Error 2026-05-03T01:09:14+00:00
```
2026-05-03T01:09:14.6723749Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-05-03T01:09:14.6724247Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-8121155345251486937
2026-05-03T01:09:14.6728240Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-05-03T01:09:14.6741438Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-05-03T01:09:14.6741995Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-05-03T01:09:14.6742312Z         
2026-05-03T01:09:14.6743042Z         Error: peer networking is in a failed state: Could not create peering connection in Atlas Azure account because a peer with an overlapping CIDR block already exists.
2026-05-03T01:09:14.6743578Z         
2026-05-03T01:09:14.6743874Z           with mongodbatlas_network_peering.test,
2026-05-03T01:09:14.6744410Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2026-05-03T01:09:14.6744917Z           19: 		resource "mongodbatlas_network_peering" "test" {
2026-05-03T01:09:14.6745189Z         
2026-05-03T01:09:14.6750945Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (209.00s)
```

- 2026-05-04
  - PASS 5 minutes
  - PASS 4 minutes
- 2026-05-05 PASS 4 minutes
- 2026-05-06 PASS 5 minutes
