# network/networkpeering/TestAccNetworkRSNetworkPeering_Azure Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-05 00:45](#error-2026-02-05t0045000000) | NO_CAPACITY /api/atlas/v2/groups/6983e695b0f8d5bab818a67a/containers | dev | 3.04s
[2026-02-17 17:55](#error-2026-02-17t1755250000) | NO_CAPACITY /api/atlas/v2/groups/6994a91534398663d0bc738c/containers | dev | 4.04s
[2026-02-19 00:45](#error-2026-02-19t0045500000) | NO_CAPACITY /api/atlas/v2/groups/69965bc599696b9761bc21b6/containers | dev | 4.00s
[2026-02-24 00:43](#error-2026-02-24t0043140000) | NO_CAPACITY /api/atlas/v2/groups/699cf2a88dfec41eaa84b158/containers | dev | 7.03s
[2026-02-26 00:42](#error-2026-02-26t0042560000) | NO_CAPACITY /api/atlas/v2/groups/699f9592b9916b47c880d59a/containers | dev | 5.08s
[2026-03-04 00:48](#error-2026-03-04t0048270000) | NO_CAPACITY /api/atlas/v2/groups/69a77edda0aca1fefeeb0096/containers | dev | 4.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T00:45:00+00:00
```
2026-02-05T00:45:00.9635619Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-02-05T00:45:00.9636233Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-7954895038688731946
2026-02-05T00:45:00.9641669Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-02-05T00:45:00.9656229Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-02-05T00:45:00.9656858Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-02-05T00:45:00.9657288Z         
2026-02-05T00:45:00.9659238Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e695b0f8d5bab818a67a/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6983e695b0f8d5bab818a67a. Reason: Conflict. Params: [AZURE 6983e695b0f8d5bab818a67a], BadRequestDetail: 
2026-02-05T00:45:00.9660860Z         
2026-02-05T00:45:00.9661401Z           with mongodbatlas_network_container.test,
2026-02-05T00:45:00.9662134Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-05T00:45:00.9662822Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-05T00:45:00.9663197Z         
2026-02-05T00:45:00.9663516Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (3.42s)
```

- 2026-02-06 PASS 4 minutes
- 2026-02-07 PASS 4 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 4 minutes
- 2026-02-10 PASS 4 minutes
- 2026-02-11 PASS 4 minutes
- 2026-02-12 PASS 4 minutes
- 2026-02-13 PASS 4 minutes
- 2026-02-14 PASS 4 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 4 minutes
- 2026-02-17
  - PASS 4 minutes
  - PASS 4 minutes
  - FAIL 4 seconds

### Error 2026-02-17T17:55:25+00:00
```
2026-02-17T17:55:25.1170124Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-02-17T17:55:25.1170725Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-6508913672134210239
2026-02-17T17:55:25.1176594Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-02-17T17:55:25.1190902Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-02-17T17:55:25.1191809Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-02-17T17:55:25.1192574Z         
2026-02-17T17:55:25.1196221Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6994a91534398663d0bc738c/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6994a91534398663d0bc738c. Reason: Conflict. Params: [AZURE 6994a91534398663d0bc738c], BadRequestDetail: 
2026-02-17T17:55:25.1197661Z         
2026-02-17T17:55:25.1198129Z           with mongodbatlas_network_container.test,
2026-02-17T17:55:25.1198865Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-17T17:55:25.1199813Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-17T17:55:25.1200210Z         
2026-02-17T17:55:25.1200520Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (4.35s)
```

- 2026-02-18 PASS 4 minutes
- 2026-02-19

### Error 2026-02-19T00:45:50+00:00
```
2026-02-19T00:45:50.2853288Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-02-19T00:45:50.2853889Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-7116939691372997646
2026-02-19T00:45:50.2859378Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-02-19T00:45:50.2873761Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-02-19T00:45:50.2874304Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-02-19T00:45:50.2874728Z         
2026-02-19T00:45:50.2876642Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69965bc599696b9761bc21b6/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69965bc599696b9761bc21b6. Reason: Conflict. Params: [AZURE 69965bc599696b9761bc21b6], BadRequestDetail: 
2026-02-19T00:45:50.2878005Z         
2026-02-19T00:45:50.2878367Z           with mongodbatlas_network_container.test,
2026-02-19T00:45:50.2879082Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-19T00:45:50.2879757Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-19T00:45:50.2880119Z         
2026-02-19T00:45:50.2880526Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (4.01s)
```

- 2026-02-20 PASS 4 minutes
- 2026-02-21 PASS 4 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 4 minutes
- 2026-02-24

### Error 2026-02-24T00:43:14+00:00
```
2026-02-24T00:43:14.4924420Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-02-24T00:43:14.4925060Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-8496786574935761708
2026-02-24T00:43:14.4931742Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-02-24T00:43:14.4944746Z    test_step_number=1 test_name=TestAccNetworkRSNetworkPeering_Azure
2026-02-24T00:43:14.4945387Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-02-24T00:43:14.4945803Z         
2026-02-24T00:43:14.4948045Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2a88dfec41eaa84b158/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 699cf2a88dfec41eaa84b158. Reason: Conflict. Params: [AZURE 699cf2a88dfec41eaa84b158], BadRequestDetail: 
2026-02-24T00:43:14.4949694Z         
2026-02-24T00:43:14.4950111Z           with mongodbatlas_network_container.test,
2026-02-24T00:43:14.4950926Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-24T00:43:14.4951664Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-24T00:43:14.4952024Z         
2026-02-24T00:43:14.4952324Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (7.28s)
```

- 2026-02-25 PASS 4 minutes
- 2026-02-26

### Error 2026-02-26T00:42:56+00:00
```
2026-02-26T00:42:56.8128472Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-02-26T00:42:56.8129073Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-347147817367944367
2026-02-26T00:42:56.8135665Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-02-26T00:42:56.8149376Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-02-26T00:42:56.8149909Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-02-26T00:42:56.8150324Z         
2026-02-26T00:42:56.8152250Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699f9592b9916b47c880d59a/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 699f9592b9916b47c880d59a. Reason: Conflict. Params: [AZURE 699f9592b9916b47c880d59a], BadRequestDetail: 
2026-02-26T00:42:56.8153858Z         
2026-02-26T00:42:56.8154232Z           with mongodbatlas_network_container.test,
2026-02-26T00:42:56.8154949Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-26T00:42:56.8155630Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-02-26T00:42:56.8155979Z         
2026-02-26T00:42:56.8156271Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (5.78s)
```

- 2026-02-27 PASS 6 minutes
- 2026-02-28 PASS 5 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 4 minutes
  - PASS 4 minutes
- 2026-03-03 PASS 4 minutes
- 2026-03-04

### Error 2026-03-04T00:48:27+00:00
```
2026-03-04T00:48:27.7630005Z === RUN   TestAccNetworkRSNetworkPeering_Azure
2026-03-04T00:48:27.7630924Z     resource_test.go:31: Creating execution project (1): test-acc-tf-p-8673779873749925124
2026-03-04T00:48:27.7636378Z === CONT  TestAccNetworkRSNetworkPeering_Azure
2026-03-04T00:48:27.7651089Z === NAME  TestAccNetworkRSNetworkPeering_Azure
2026-03-04T00:48:27.7651722Z     resource_test.go:40: Step 1/3 error: Error running apply: exit status 1
2026-03-04T00:48:27.7652132Z         
2026-03-04T00:48:27.7654048Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77edda0aca1fefeeb0096/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69a77edda0aca1fefeeb0096. Reason: Conflict. Params: [AZURE 69a77edda0aca1fefeeb0096], BadRequestDetail: 
2026-03-04T00:48:27.7655413Z         
2026-03-04T00:48:27.7655781Z           with mongodbatlas_network_container.test,
2026-03-04T00:48:27.7656614Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-03-04T00:48:27.7657298Z           12: 		resource "mongodbatlas_network_container" "test" {
2026-03-04T00:48:27.7657648Z         
2026-03-04T00:48:27.7657952Z --- FAIL: TestAccNetworkRSNetworkPeering_Azure (4.46s)
```

- 2026-03-05 PASS 6 minutes
- 2026-03-06 PASS 4 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 4 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 4 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 4 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 4 minutes
  - PASS 4 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 4 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 4 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 4 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
