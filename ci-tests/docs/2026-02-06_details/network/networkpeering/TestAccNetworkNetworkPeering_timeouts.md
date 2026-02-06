# network/networkpeering/TestAccNetworkNetworkPeering_timeouts Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-03 00:43](#error-2026-02-03t0043220000) | NO_CAPACITY /api/atlas/v2/groups/698143b4b2e54ee995900666/containers | dev | 6.03s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 minutes
- 2026-01-09 PASS 2 minutes
- 2026-01-10 PASS 2 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 2 minutes
- 2026-01-13 PASS 2 minutes
- 2026-01-14 PASS 2 minutes
- 2026-01-15 PASS 2 minutes
- 2026-01-16 PASS 2 minutes
- 2026-01-17 PASS 2 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 2 minutes
- 2026-01-20 PASS 2 minutes
- 2026-01-21 PASS 2 minutes
- 2026-01-22 PASS 2 minutes
- 2026-01-23 PASS 2 minutes
- 2026-01-24 PASS 2 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 2 minutes
- 2026-01-27 PASS 2 minutes
- 2026-01-28 PASS 2 minutes
- 2026-01-29 PASS 2 minutes
- 2026-01-30 PASS 2 minutes
- 2026-01-31 PASS 2 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 2 minutes
- 2026-02-03

### Error 2026-02-03T00:43:22+00:00
```
2026-02-03T00:43:22.1614874Z === RUN   TestAccNetworkNetworkPeering_timeouts
2026-02-03T00:43:22.1616869Z === CONT  TestAccNetworkNetworkPeering_timeouts
2026-02-03T00:43:22.1726071Z === NAME  TestAccNetworkNetworkPeering_timeouts
2026-02-03T00:43:22.1726766Z     resource_test.go:212: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:43:22.1727290Z         
2026-02-03T00:43:22.1729309Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b4b2e54ee995900666/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 698143b4b2e54ee995900666. Reason: Conflict. Params: [AWS 698143b4b2e54ee995900666], BadRequestDetail: 
2026-02-03T00:43:22.1730645Z         
2026-02-03T00:43:22.1731011Z           with mongodbatlas_network_container.test,
2026-02-03T00:43:22.1731724Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_network_container" "test":
2026-02-03T00:43:22.1732390Z           16: 	resource "mongodbatlas_network_container" "test" {
2026-02-03T00:43:22.1732736Z         
2026-02-03T00:43:22.1734517Z --- FAIL: TestAccNetworkNetworkPeering_timeouts (6.34s)
```

- 2026-02-04 PASS 2 minutes
- 2026-02-05 PASS 2 minutes
- 2026-02-06 PASS 2 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 2 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 2 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 2 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 2 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 2 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 2 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
