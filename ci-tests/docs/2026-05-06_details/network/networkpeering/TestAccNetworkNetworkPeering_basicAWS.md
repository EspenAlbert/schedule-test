# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-16 00:55](#error-2026-04-16t0055120000) | NO_CAPACITY /api/atlas/v2/groups/69e0325d8379397d109c4b3c/containers | dev | 37.10s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 3 minutes
- 2026-04-08 PASS 3 minutes
- 2026-04-09 PASS 3 minutes
- 2026-04-10 PASS 3 minutes
- 2026-04-11 PASS 3 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 2 minutes
- 2026-04-14 PASS 3 minutes
- 2026-04-15 PASS 2 minutes
- 2026-04-16

### Error 2026-04-16T00:55:12+00:00
```
2026-04-16T00:55:12.9230604Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2026-04-16T00:55:12.9238702Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2026-04-16T00:55:12.9300596Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2026-04-16T00:55:12.9301149Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:55:12.9301717Z         
2026-04-16T00:55:12.9303824Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325d8379397d109c4b3c/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 69e0325d8379397d109c4b3c. Reason: Conflict. Params: [AWS 69e0325d8379397d109c4b3c], BadRequestDetail: 
2026-04-16T00:55:12.9305170Z         
2026-04-16T00:55:12.9305558Z           with mongodbatlas_network_container.test,
2026-04-16T00:55:12.9306810Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_network_container" "test":
2026-04-16T00:55:12.9307498Z           16: 	resource "mongodbatlas_network_container" "test" {
2026-04-16T00:55:12.9307857Z         
2026-04-16T00:55:12.9308164Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (37.96s)
```

- 2026-04-17 PASS 2 minutes
- 2026-04-18 PASS 3 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 3 minutes
- 2026-04-22 PASS 35 minutes
- 2026-04-23 PASS 3 minutes
- 2026-04-24 PASS 3 minutes
- 2026-04-25 PASS 3 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 2 minutes
- 2026-04-28 PASS 3 minutes
- 2026-04-29 PASS 2 minutes
- 2026-04-30 PASS 4 minutes
- 2026-05-01 PASS 3 minutes
- 2026-05-02 PASS 4 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 2 minutes
- 2026-05-05 PASS 4 minutes
- 2026-05-06 PASS 3 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 3 minutes
  - PASS 2 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 4 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 3 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 3 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 4 minutes
- 2026-05-04
  - PASS 4 minutes
  - PASS 2 minutes
- 2026-05-05 PASS 2 minutes
- 2026-05-06 PASS 3 minutes
